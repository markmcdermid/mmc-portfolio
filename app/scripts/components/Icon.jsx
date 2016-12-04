import React, { Component } from 'react';
import { actions as iconActions } from 'modules/icons.js';
import { connect } from 'react-redux';

class Icon extends Component {
  static defaultProps = {
    isActive: true,
    className: '',
    style: {},
    topOffset: 0,
  }

  getStyle(x, y, zInd) {
    return {
      transform: `translate3d(${x}px, ${y}px, 0)`,
      zIndex: zInd,
    };
  }

  handleMouseEnter = () => {
    const { setHovered, index } = this.props
    setHovered(index);
  }

  render() {
    const { x, y, zInd } = this.props.coords;
    const style = this.getStyle(x, y, zInd);
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        className="flying-icon"
        style={style}
      >
        <img
          className="flying-icon__img"
          src={this.props.item.imgSrc} alt=""
        />
        {/*{this.props.hovered && this.props.completion === 1 && <Tooltip x={x} y={y} name={this.props.item.name} />}*/}
      </div>
    );
  }
}
const mapDispatchToProps = iconActions;
export default connect(null, mapDispatchToProps)(Icon);
