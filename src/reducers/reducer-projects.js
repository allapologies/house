import { GET_PROJECTS, CREATE_PROJECT } from '../actions/constants';
import defaultProjects from '../fixtures';

export default function(state=defaultProjects, action){
  switch (action.type) {
    case GET_PROJECTS:
      return [ action.payload.data, ...state];
    case CREATE_PROJECT:
      return [action.payload, ...state]
  }
  return state;
};