import { combineReducers } from 'redux';
import projectReducer from './projects';
import userReducer from './user';

export default combineReducers({
  projectReducer,
  userReducer,
});
