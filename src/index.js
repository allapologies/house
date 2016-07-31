import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import {Router, browserHistory} from 'react-router'
import routes from './routes'
import reducers from './reducers'
import DevTools from './containers/DevTools'
import thunk from 'redux-thunk'
import css from "./../style/style.css"

const enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument()
)
const store = createStore(reducers, {}, enhancer)
window.store = store

ReactDOM.render(
    <Provider store={ store }>
        <Router history={browserHistory} routes={routes}/>
    </Provider>
    , document.querySelector('.container'))
