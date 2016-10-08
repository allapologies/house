'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { submitSpendings, fetchDictionaries } from '../actions'
import { SpendsInput } from '../components'

@connect(
    ({ dictionaries }) => ({ dictionaries }),
    (dispatch) => bindActionCreators({ submitSpendings, fetchDictionaries }, dispatch)
)
export class NewSpends extends React.Component {
    render () {
        return (
            <SpendsInput
                id={this.props.params.id}
                dictionaries={this.props.dictionaries}
                submitSpendings={this.props.submitSpendings}
            />
        )
    }
}
