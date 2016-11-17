import React from 'react';

export default class AppPublic extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  };

  render() {
    return (
      <div key="app" className="app">
        <main className="app__main">
          {this.props.children}
        </main>
      </div>
    );
  }
}

