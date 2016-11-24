import React from 'react';
import IconContainer from 'components/IconContainer';

export class Hero extends React.Component {
  render() {
    return (
      <div className="hero" style={{ height: window.screen.availHeight }}>
        <IconContainer></IconContainer>
      </div>
    );
  }
}

export default Hero;
