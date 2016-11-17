import React, { Component } from 'react';
import items from 'data/sexyData';
import SexyItem from 'components/SexyItem';
import { Motion, spring } from 'react-motion';


class SexyBit extends Component {
  items = items;

  X_OFFSET = window.innerWidth / 2;
  Y_OFFSET = window.innerHeight / 2;

  state = { open: false };

  handleMouseDown = e => {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleMouseDown}>
          Toggle On/Off
        </button>

        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleMouseDown}>
          Toggle Type
        </button>

        <div style={{ position: 'relative' }}>
          {this.items.map((i) => {
            const negX = i.dX < 0 ? 1 : -1;
            const negY = i.dY < 0 ? 1 : -1;
            return <Motion key={i.id} style={{
              time: spring(this.state.open ? 1 : 0, { stiffness: 100, damping: 15 }) // animate this value
            }}>
              { ({ time }) => {
                const a = (i.dX - this.X_OFFSET) * time;
                const b = (i.dY - this.Y_OFFSET)* time;

                const xCurve = 150 * negX * Math.sin((time * Math.PI));
                const yCurve = 250 * negY * Math.sin(time * Math.PI);

                const x = this.X_OFFSET - 150 + a + xCurve;
                const y = this.Y_OFFSET - 50 + b + yCurve;
                const style = { transform: `translate3d(${x}px, ${y}px, 0)` };

                return <SexyItem
                  key={i.id}
                  color={i.color}
                  style={style}
                  imgSrc={i.imgSrc}
                />;
              }}
            </Motion >;
          })}
        </div>
      </div>
    );
  }
}

export default SexyBit;
