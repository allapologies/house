import * as actions from '../actions/constants'
import _ from 'lodash'

const INITIAL_STATE = {
    items: [],
    current: null
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.FETCH_PROJECT:
            return _.assign({}, state, { current: action.payload.data })
        case actions.FETCH_PROJECTS_LIST:
            return _.assign({}, state, { items: action.payload.data })
        case actions.CREATE_PROJECT:
            return _.assign({}, state, { items: state.items.push(action.payload.data) })
        case actions.DELETE_PROJECT:
            return _.assign({}, state, { items: _.filter(state.items,
                (project) => project.projectId !== _.toNumber(action.id)) })
        default:
            return state
    }
}
