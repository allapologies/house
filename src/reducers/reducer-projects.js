import { GET_PROJECTS, CREATE_PROJECT, DELETE_PROJECT } from '../actions/constants';
import defaultProjects from '../fixtures';

export default function(state=defaultProjects, action){
  switch (action.type) {
    case GET_PROJECTS:
      return [ action.payload.data, ...state];
    case CREATE_PROJECT:
      return [...state, action.payload];
    case DELETE_PROJECT:
      return state.filter((project) => {
        return (project.projectId != action.payload);
      });
  }
  return state;
};