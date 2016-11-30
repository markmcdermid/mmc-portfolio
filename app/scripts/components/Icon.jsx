import React, { Component } from 'react';
import Tooltip from 'components/Tooltip';

class Icon extends Component {

  constructor(props) {
    super(props);
    console.log('construct')
  }

  static defaultProps = {
    isActive: true,
    className: '',
    style: {},
    topOffset: 0,
  }

  state = { hovered: false }

  style = {
    position: 'relative'
  }


  getStyle(x, y, zInd) {
    return {
      transform: `translate3d(${x}px, ${y}px, 0)`,
      zIndex: zInd,
    };
  }


  handleMouseEnter = () => {
    this.setState({ hovered: true })
  }

  handleMouseLeave = () => {
    this.setState({ hovered: false })
  }

  render() {
    const { x, y, zInd} = this.props.coords;
    const style = this.getStyle(x, y, zInd);
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className="flying-icon"
        style={style}
      >
        <img
          className="flying-icon__img"
          src={this.props.item.imgSrc} alt=""
        />
        {this.state.hovered && <Tooltip x={x} y={y} name={this.props.item.name} />}
      </div>
    );
  }
}

export default Icon;
