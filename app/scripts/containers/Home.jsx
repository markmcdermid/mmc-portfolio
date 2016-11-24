import React from 'react';
import IconContainer from 'components/IconContainer';
import Hero from 'components/Hero';
import Header from 'components/header';

export class Home extends React.Component {
  render() {
    return (
      <div key="Home" className="app__home app__route">
        <Header></Header>
        <Hero></Hero>
        {/*<SexyMenu></SexyMenu>*/}
      </div>
    );
  }
}

export default Home;
