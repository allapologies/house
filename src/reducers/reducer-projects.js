import { FETCH_PROJECTS, CREATE_PROJECT, DELETE_PROJECT, FETCH_PROJECT } from '../actions/constants';
import { Map, List } from 'immutable'

const INITIAL_STATE = Map({
    all: List(),
    current: null
})

export default function (state=INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_PROJECT:
      return state.set('current', action.payload.data)
    case FETCH_PROJECTS:
      return state.setIn(['all'], List(action.payload.data))
    case CREATE_PROJECT:
      return state.updateIn(['all'], arr => arr.push(action.payload.data))
    case DELETE_PROJECT:
      return state.updateIn(['all'],
          arr => arr.filter(project=> project.projectId != action.id)
      );
    };
  return state;
};