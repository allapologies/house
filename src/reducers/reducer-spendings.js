import { SUBMIT_SPENDING, FETCH_SPENDINGS } from '../actions/constants';

const INITIAL_STATE ={ all: [] };

export default function(state=INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_SPENDINGS:
      return { ...state, all: action.payload.data };
    case SUBMIT_SPENDING:
      return { ...state, all: [...state.all, action.payload.data] };
  }
  return state;
};