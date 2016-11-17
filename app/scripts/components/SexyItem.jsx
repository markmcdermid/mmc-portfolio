import React, { Component } from 'react';

class SexyItem extends Component {
  static defaultProps = {
    isActive: true,
    className: '',
    style: {},
    topOffset: 0,
  }

  render() {
    return (
      <div className="sexy-item" style={this.props.style}>
        <img className="sexy-item__img" src={this.props.imgSrc} alt=""/>
      </div>
    );
  }
}

export default SexyItem;
