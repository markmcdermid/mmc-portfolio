import React from 'react';
import SexyBit from 'components/SexyBit';
import SexyMenu from '../components/SexyMenu';

export class Home extends React.Component {
  render() {
    return (
      <div key="Home" className="app__home app__route">
        <SexyBit></SexyBit>
        {/*<SexyMenu></SexyMenu>*/}
      </div>
    );
  }
}

export default Home;
