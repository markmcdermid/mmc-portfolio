import React from 'react';
import {Motion, spring} from 'react-motion';

const Demo = React.createClass({
  getInitialState() {
    return {isOpen: false};
  },

  handleMouseDown() {
    this.setState({isOpen: !this.state.isOpen});
  },

  handleTouchStart(e) {
    e.preventDefault();
    this.handleMouseDown();
  },

  render() {
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle
        </button>

        <Motion style={{x: spring(this.state.isOpen ? 400 : 0)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`
            <div className="demo0">
              <div className="demo0-block" style={{
                width: '30px',
                height: '30px',
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }} />
            </div>
          }
        </Motion>
      </div>
    );
  },
});

export default Demo;
