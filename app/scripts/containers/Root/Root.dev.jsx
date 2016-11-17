import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from 'routes';


export default class Root extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired
  };

  /* istanbul ignore next */
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes} />
        </div>
      </Provider>
    );
  }
}
