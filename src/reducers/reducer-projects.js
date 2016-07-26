import * as actions from '../actions/constants'
import {Map, List} from 'immutable'

const INITIAL_STATE = Map({
    items: List(),
    current: null
})

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.FETCH_PROJECT:
            return state.set('current', action.payload.data)
        case actions.FETCH_PROJECTS:
            return state.setIn(['items'], List(action.payload.data))
        case actions.CREATE_PROJECT:
            return state.updateIn(['items'], arr => arr.push(action.payload.data))
        case actions.DELETE_PROJECT:
            return state.updateIn(['items'],
                arr => arr.filter(project => project.projectId !== action.id)
            )
        default:
            return state
    }
}