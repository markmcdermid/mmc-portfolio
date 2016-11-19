import React, { Component } from 'react';
import items from 'data/sexyData';
import config from 'config';

import SexyItem from 'components/SexyItem';
import { StaggeredMotion, spring } from 'react-motion';
import { constant, range } from 'lodash';

class SexyBit extends Component {
  items = items;

  state = { open: false, speed: 50 };

  handleMouseDown = e => {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  getIconStyle = (index, time, dX, dY) => {
    const a = (dX - config.CENTRE_X) * time;
    const b = (dY - config.CENTRE_Y) * time;
    let xCurve = 150 * Math.sin(time * Math.PI);
    let yCurve = 300 * Math.sin(time * Math.PI);
    xCurve = (dX < config.CENTRE_X) ? xCurve : xCurve * -1;
    yCurve = (dY < config.CENTRE_Y) ? yCurve : yCurve * -1;
    const x = config.CENTRE_X + a + xCurve;
    const y = config.CENTRE_Y + b + yCurve;
    return {
      transform: `translate3d(${x}px, ${y}px, 0)`,
      zIndex: (index - items.length) * -1
    };
  }

  defaultCircleStyles = this.items.map(i => ({
    completion: 0,
    dX: i.circle.dX,
    dY: i.circle.dY
  }));

  defaultStyles = this.items.map(i => {
    return {
      completion: 0,
      dX: i.dX,
      dY: i.dY
    };
  });

  getStylesArray = (prevStyles) => {
    return prevStyles.map(({ dX, dY }, i) => {
      const { open } = this.state;
      const completion = open ? 1 : 0;

      const params = { stiffness: this.state.speed, damping: 11 }

      const animate = spring(completion, params);

      if (i === 0) return { completion: animate, dX, dY };

      const lastCompletion = prevStyles[i - 1].completion;
      const thisCompletion = prevStyles[i].completion;
      const shouldAnimate = open ? lastCompletion > 0.1 : lastCompletion < 0.9;

      return { completion: shouldAnimate ? animate : thisCompletion, dX, dY };
    });
  }

  handleInterpolatedStyles = (interpolatedStyles) => {
    // Interpolated styles updates on every change
    // [array of percentages here]
    return <div style={{ width: '100%', height: '100%' }}>
      {interpolatedStyles.map(({ completion, dY, dX }, index) => {
        const style = this.getIconStyle(index, completion, dX, dY);
        const imgSrc = this.items[index].imgSrc;
        return <SexyItem key={index} style={style} imgSrc={imgSrc} />;
      })}
    </div>
  }


  handleRangeChange = e => {
    this.setState({ speed: parseInt(e.target.value) });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <button onMouseDown={this.handleMouseDown}>
          Toggle On/Off
        </button>

        <input type="range"
               min="1"
               default="60"
               max="120"
               step="5"
               onChange={this.handleRangeChange}
        />

        <StaggeredMotion defaultStyles={this.defaultCircleStyles} styles={this.getStylesArray}>
          {this.handleInterpolatedStyles}
        </StaggeredMotion>
      </div>
    );
  }
}

export default SexyBit;
