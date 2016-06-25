import { FETCH_DICTIONARIES } from '../actions/constants';
import Immutable, { Map } from 'immutable'

const INITIAL_STATE = Map()


export default function(state=INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_DICTIONARIES:
      return state.setIn([],Map(action.payload.data))
  }
  return state;
};