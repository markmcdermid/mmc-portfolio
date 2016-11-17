import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const reducer = combineReducers({ ...rootReducer, routing: routerReducer });

/* istanbul ignore next */
const newStore = (initialState = {}) => {
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, routerMiddleware(browserHistory)),
  )(createStore);

  const store = createStoreWithMiddleware(reducer, initialState);
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(require('./rootReducer').default);
    });
  }
  return store;
};

export default newStore;

