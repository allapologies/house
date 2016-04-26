import { combineReducers } from 'redux';
import projects from './reducer-projects';

const rootReducer = combineReducers({
  projects
});

export default rootReducer;