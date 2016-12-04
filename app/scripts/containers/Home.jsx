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
        <Hero>
          <video autoPlay loop className="hero__video" muted>
            <source
              src="https://player.vimeo.com/external/132838152.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761"
              type="video/mp4" />
          </video>
          <div className="clip-text">
            Test
          </div>
          <h1 class="title absolute-center">
  <span class="knockout">
    <span class="knockout__text">KNOCKOUT TEXT</span>

    <svg class="knockout__svg" xmlns="http://www.w3.org/2000/svg"
         width="100%" height="100%">

      <mask id="text-clip">
        <rect id="bg" width="100%" height="100%" fill="white" />
        <text x="50%" y="50%" width="100%" height="100%" fill="#000">KNOCKOUT TEXT</text>
      </mask>

      <rect width="100%" height="100%" mask="url(#text-clip)" />

    </svg>
  </span>

          </h1>
        </Hero>
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
