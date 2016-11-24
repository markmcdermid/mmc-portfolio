import React, { Component } from 'react';
import Tooltip from 'components/Tooltip';

class SexyItem extends Component {
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

  handleMouseEnter = () => {
    this.setState({ hovered: true })
  }

  handleMouseLeave = () => {
    this.setState({ hovered: false })
  }

  render() {
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className="flying-icon"
        style={this.props.style}
      >
        <img className="flying-icon__img" src={this.props.imgSrc} alt="" />
        {this.state.hovered && <Tooltip name={this.props.item.name} />}
      </div>
    );
  }
}

export default SexyItem;
