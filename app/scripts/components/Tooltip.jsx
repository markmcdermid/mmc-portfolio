import React, { Component } from 'react';
import classnames from 'classnames';

class Tooltip extends Component {

  render() {
    const { x, y } = this.props;
    const w = window.innerWidth;
    const h = window.screen.availHeight;

    var xR = x / w * 100;

    // AS X INCREASES INCREASE left of tooltip arrow
    const a = -Math.round(xR);
    const style = {
      transform: `translate3d(${a}%, 100%, 0)`
    };

    const arrowStyle = {
      left: `${xR}%`,
    };

    return (
      <div style={style} className="tooltip">
        <div style={arrowStyle} className="tooltip__arrow tooltip__arrow--top"></div>
        <h3>{this.props.name}</h3>
        <p>Some load of extra text that I need to put here because there'll be quite a lot of data here. Pictures?!
          Links?</p>
        <p>Some load of extra text that I need to put here because there'll be quite a lot of data here. Pictures?!
          Links?</p>
        <p>Some load of extra text that I need to put here because there'll be quite a lot of data here. Pictures?!
          Links?</p>
      </div>
    )
  }
}

export default Tooltip;
