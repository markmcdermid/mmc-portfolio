import { combineReducers } from 'redux';
import icons from 'modules/icons';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  icons,
  routing: routerReducer
});

