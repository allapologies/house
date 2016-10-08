'use strict'
import React from 'react'
import { DevTools } from '../containers'

export default class App extends React.Component {
    render () {
        return (
            <div>
                {this.props.children}
                <DevTools />
            </div>
        )
    }
}
