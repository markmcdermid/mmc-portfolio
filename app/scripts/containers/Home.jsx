import React from 'react';
import Hero from 'components/Hero';
import Header from 'components/header';
import IconContainer from 'components/IconContainer';
import IconDetails from 'components/IconDetails';

export class Home extends React.Component {
  render() {
    return (
      <div key="Home" className="app__home app__route">
        <Header></Header>
        <Hero />
        <Hero>
          <IconContainer />
          <IconDetails />
        </Hero>
        <Hero />
        {/*<SexyMenu></SexyMenu>*/}
      </div>
    );
  }
}

export default Home;
