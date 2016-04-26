import { GET_PROJECTS } from '../actions/constants';
import defaultProjects from '../fixtures';

export default function(state=defaultProjects, action){
  switch (action.type) {
    case GET_PROJECTS:
      return [ action.payload.data, ...state];
  }
  return state;
};