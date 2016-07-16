import {SUBMIT_SPENDING, FETCH_SPENDINGS, DELETE_SPENDING} from '../actions/constants';
import {Map, List} from 'immutable'

const INITIAL_STATE = Map({
    items: List()
})

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_SPENDINGS:
            return state.setIn(['items'], List(action.payload.data))
        case SUBMIT_SPENDING:
            return state.updateIn(['items   '], spending => spending.push(action.payload.data))
        case DELETE_SPENDING:
            return state.updateIn(['items'], arr => arr.filter(spending => spending.id != action.id))
    }
    return state;
};