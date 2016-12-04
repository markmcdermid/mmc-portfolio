import { applyMiddleware, createStore, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

/* istanbul ignore next */
const newStore = (initialState = {}) => {
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, routerMiddleware(browserHistory))
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer, initialState);
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(require('./rootReducer').default);
    });
  }
  return store;
};

export default newStore;

