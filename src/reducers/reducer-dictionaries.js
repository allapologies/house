import * as actions from '../actions/constants'
import {Map} from 'immutable'

const INITIAL_STATE = Map()

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.FETCH_DICTIONARIES:
            return state.setIn([], Map(action.payload.data))
        default:
            return state
    }
}
