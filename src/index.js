import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import reducers from './reducers'
import css from "./../style/style.css"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, {}, composeEnhancers(
    applyMiddleware(thunk)
))

ReactDOM.render(
    <Provider store={ store }>
        <Router history={browserHistory} routes={routes}/>
    </Provider>
    , document.querySelector('.container'))
