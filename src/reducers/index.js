import { combineReducers } from 'redux';
import projects from './reducer-projects';
import spendings from './reducer-spendings';

const rootReducer = combineReducers({
  projects,
  spendings
});

export default rootReducer;