import { combineReducers } from 'redux'
import projects from './reducer-projects'
import spendings from './reducer-spendings'
import dictionaries from './reducer-dictionaries'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    projects,
    spendings,
    dictionaries,
    form: formReducer
})

export default rootReducer
