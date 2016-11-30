import React, { Component } from 'react';
import classnames from 'classnames';

class Tooltip extends Component {

  render() {
    const { x, y } = this.props;
    const w = window.innerWidth;
    const h = window.screen.availHeight;

    const a = -Math.round(x / w * 100);
    const b = y > h / 2 ? 100: -100;

    const style = {
      transform: `translate3d(${a}%, ${b}%, 0)`
    };

    return (
      <div style={style} className="flying-icon__tooltip flying-icon__tooltip--bottom">
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
