import React, { Component } from 'react';

class ImgScroll extends Component {
  render() {
    const bgStyle = {
      backgroundImage: 'url(/media/images/stock/1.jpg)'
    };
    return (
      <div className="img-scroll">
        <div className="img-scroll__img" style={bgStyle}></div>
        <div className="img-scroll__details"></div>
      </div>
    )
  }
}

export default ImgScroll;
