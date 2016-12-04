import React from 'react';

export class Hero extends React.Component {
  render() {
    return (
      <div style={this.props.style} className="full-height-flex">
        {this.props.children}
      </div>
    );
  }
}

export default Hero;
