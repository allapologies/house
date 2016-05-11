import { combineReducers } from 'redux';
import projects from './reducer-projects';
import spendings from './reducer-spendings';
import dictionaries from './reducer-dictionaries';

const rootReducer = combineReducers({
  projects,
  spendings,
  dictionaries
});

export default rootReducer;