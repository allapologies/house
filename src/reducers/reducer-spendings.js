import { SUBMIT_SPENDING, FETCH_SPENDINGS } from '../actions/constants';
import { Map, List } from 'immutable'

const INITIAL_STATE = Map({
    all: List()
})

export default function(state=INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_SPENDINGS:
      return state.setIn(['all'], List(action.payload.data))
    case SUBMIT_SPENDING:
      return { ...state, all: [...state.all, action.payload.data] };
  }
  return state;
};