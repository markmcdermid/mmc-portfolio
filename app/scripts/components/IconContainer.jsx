import React, { Component } from 'react';
import Icon from 'components/Icon';
import config from 'config';
import { StaggeredMotion, spring } from 'react-motion';
import { constant, range } from 'lodash';
import { connect } from 'react-redux';
import $ from 'jquery';
import { actions as iconActions } from 'modules/icons';

class IconContainer extends Component {
  componentDidMount() {
    $(window).on('scroll', () => {
      const { toggleOpen: tgl } = this.props;
      var st = $(window).scrollTop();
      var a = $(this.node).offset().top - 100;
      return st > a ? tgl(true) : tgl(false);
    });
  }

  defaultStyles = this.props.icons.map(i => ({ completion: 0 }));

  getCoords = (index, time) => {
    const i = this.props.icons[index];
    const dX = this.props.isGrid ? i.grid.dX : i.circle.dX;
    const dY = this.props.isGrid ? i.grid.dY : i.circle.dY;
    let curve = 100 * Math.sin(time * Math.PI);
    const xCurve = (dX < 0) ? curve : curve * -1;
    const yCurve = (dY < 0) ? curve : curve * -1;
    const x = (config.CENTRE_X + ((dX - 50) * time) + 3 * xCurve).toFixed(0);
    const y = (config.CENTRE_Y + ((dY - 50) * time) + 2 * yCurve).toFixed(0);
    const z = (index - this.props.icons.length) * -1;
    return { x, y, zInd: z };
  }

  getStylesArray = (prevStyles) => prevStyles.map((prev, i) => {
    const { isOpen } = this.props;
    const completion = isOpen ? 1 : 0;

    const params = { stiffness: 50, damping: 11 }

    const animate = spring(completion, params);
    if (i === 0) return { completion: animate };

    const lastCompletion = prevStyles[i - 1].completion;
    const thisCompletion = prevStyles[i].completion;
    const shouldAnimate = isOpen ? lastCompletion > 0.1 : lastCompletion < 0.9;
    return { completion: shouldAnimate ? animate : thisCompletion };
  })

  handleInterpolated = (interpolatedStyles) => {
    return (
      <div className="icon-container__inner">
        {interpolatedStyles.map(({ completion }, index) => {
          return <Icon
            item={this.props.icons[index]}
            coords={this.getCoords(index, completion)}
            index={index}
            key={index}
            completion={completion}
          />;
        })}
      </div>
    );
  };

  setRef = node => this.node = node;

  render() {
    console.log(this.props);
    return (
      <div className="icon-container" ref={this.setRef}>
        {/*<button className="btn" onClick={this.toggleOpen}>Toggle On/Off</button>
         <button className="btn" onClick={this.toggleGrid}>Toggle Grid</button>

         <input type="range"
         min="1"
         default="60"
         max="120"
         step="5"
         onChange={this.changeSpeed}
         />*/}

        <StaggeredMotion defaultStyles={this.defaultStyles} styles={this.getStylesArray}>
          {this.handleInterpolated}
        </StaggeredMotion>
      </div>
    );
  }
}

const mapStateToProps = ({ icons: { icons, isOpen, isGrid }}) => ({ icons, isOpen, isGrid });
const mapDispatchToProps = iconActions;

export default connect(mapStateToProps, mapDispatchToProps)(IconContainer);
