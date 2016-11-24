import React, { Component } from 'react';
import items from 'data/sexyData';
import config from 'config';
import Icon from 'components/Icon';
import { StaggeredMotion, spring } from 'react-motion';
import { constant, range } from 'lodash';

class IconContainer extends Component {
  items = items;
  renders = 0;

  state = { isOpen: false, speed: 50, isGrid: true };

  changeSpeed = e => this.setState({ speed: parseInt(e.target.value) })
  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen })
  toggleGrid = () => this.setState({ isGrid: !this.state.isGrid })

  getIconStyle = (index, time) => {
    const i = this.items[index];
    const dX = this.state.isGrid ? i.grid.dX : i.circle.dX;
    const dY = this.state.isGrid ? i.grid.dY : i.circle.dY;
    let curve = 150 * Math.sin(time * Math.PI);
    const xCurve = (dX < 0) ? curve : curve * -1;
    const yCurve = (dY < 0) ? curve : curve * -1;
    const x = Math.ceil(config.CENTRE_X + ((dX - 50) * time) + 3 * xCurve)
    const y = Math.ceil(config.CENTRE_Y + ((dY - 50) * time) + 2 * yCurve)
    return {
      transform: `translate3d(${x}px, ${y}px, 0)`,
      zIndex: (index - items.length) * -1
    };
  }

  defaultStyles = this.items.map(i => ({ completion: 0 }));

  getStylesArray = (prevStyles) => prevStyles.map((prev, i) => {
    const { isOpen } = this.state;
    const completion = isOpen ? 1 : 0;

    const params = { stiffness: this.state.speed, damping: 11 }

    const animate = spring(completion, params);
    if (i === 0) return { completion: animate };

    const lastCompletion = prevStyles[i - 1].completion;
    const thisCompletion = prevStyles[i].completion;
    const shouldAnimate = isOpen ? lastCompletion > 0.3 : lastCompletion < 0.9;

    return { completion: shouldAnimate ? animate : thisCompletion };
  })


  render() {
    console.log(this.renders++);
    return (
      <div ref={node => this.node = node}>
        <button className="btn" onMouseDown={this.toggleOpen}>Toggle On/Off</button>
        <button className="btn" onMouseDown={this.toggleGrid}>Toggle Grid</button>

        <input type="range"
               min="1"
               default="60"
               max="120"
               step="5"
               onChange={this.changeSpeed}
        />

        <StaggeredMotion defaultStyles={this.defaultStyles} styles={this.getStylesArray}>
          {(interpolatedStyles) => {
            return <div style={{ width: '100%', height: '100%' }}>
              {interpolatedStyles.map(({ completion }, index) => {
                const style = this.getIconStyle(index, completion);
                const imgSrc = this.items[index].imgSrc;
                return <Icon
                  item={this.items[index]}
                  key={index}
                  style={style}
                  imgSrc={imgSrc}
                />;
              })}
            </div>
          }}
        </StaggeredMotion>
      </div>
    );
  }
}

export default IconContainer;
