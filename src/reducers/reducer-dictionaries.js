import { FETCH_DICTIONARIES } from '../actions/constants';

const INITIAL_STATE ={ };

export default function(state=INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_DICTIONARIES:
      return { ...state, ...action.payload.data };
  }
  return state;
};