'use strict'

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createProject } from '../actions'

@connect(null, (dispatch) => bindActionCreators({ createProject }, dispatch))
export class NewProject extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object
    }

    constructor (props) {
        super(props)
        this.state = {
            projectName: '',
            projectDescription: ''
        }
    }

    onNameInputChange = (event) => {
        this.setState({ projectName: event.target.value })
    }

    onDescriptionInputChange = (event) => {
        this.setState({ projectDescription: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        if (!this.state.projectName) {
            return null
        }
        this.props.createProject({
            title: this.state.projectName,
            description: this.state.projectDescription
        })
        this.context.router.push('/')
    }

    render () {
        return (
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <h2>новый проект</h2>
                    <form onSubmit={this.onFormSubmit} className="form-horizontal">
                        <div className="form-group">
                            <div className="col-sm-6">
                                <input
                                    value={this.state.projectName}
                                    placeholder="введите имя нового проекта"
                                    onChange={this.onNameInputChange}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-6">
                                <input
                                    value={this.state.projectDescription}
                                    placeholder="введите описание проекта"
                                    onChange={this.onDescriptionInputChange}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-6">
                                <button type="submit" className="btn btn-default">Создать</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
