import * as actions from '../actions/constants'
import {Map, List} from 'immutable'

const INITIAL_STATE = Map({
    items: List()
})

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.FETCH_SPENDINGS:
            return state.setIn(['items'], List(action.payload.data))
        case actions.SUBMIT_SPENDING:
            return state.updateIn(['items'], spending => spending.push(action.payload.data))
        case actions.DELETE_SPENDING:
            return state.updateIn(['items'], arr => arr.filter(spending => spending.id !== action.id))
        default:
            return state
    }
}