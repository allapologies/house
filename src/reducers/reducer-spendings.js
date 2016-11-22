import * as actions from '../actions/constants'
import _ from 'lodash'

const INITIAL_STATE = {
    items: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.FETCH_SPENDINGS:
            return _.assign({}, state, { items: action.payload.data })
        case actions.SUBMIT_SPENDING:
            return _.assign({}, state, { items: state.items.push(action.payload.data) })
        case actions.DELETE_SPENDING:
            return _.assign({}, state, { items: _.filter(state.items,
                (spending) => spending.id !== _.toNumber(action.id)) })
        default:
            return state
    }
}
