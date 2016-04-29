import { FETCH_PROJECTS, CREATE_PROJECT, DELETE_PROJECT } from '../actions/constants';

const INITIAL_STATE ={ all: [] };

export default function(state=INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, all: action.payload.data };
    case CREATE_PROJECT:
      return { ...state, all: [...state.all, action.payload.data] };
    //TODO Prevent additional data fetching after deleting an item
    case DELETE_PROJECT:
      return { ...state, all: action.payload.data };
    }
  return state;
};