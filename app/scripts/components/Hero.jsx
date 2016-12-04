import React from 'react';

export class Hero extends React.Component {
  render() {
    return (
      <div className="full-height-flex">
        {this.props.children}
      </div>
    );
  }
}

export default Hero;
