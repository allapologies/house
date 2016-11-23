'use strict'

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { ProjectsListItem } from '../components'
import { fetchProjectsList } from '../actions'
import _ from 'lodash'

@connect(
    ({ projects }) => ({ projects: projects.items }),
    (dispatch) => bindActionCreators({ fetchProjectsList }, dispatch)
)
export class ProjectsList extends React.Component {
    static propTypes = {
        projects: React.PropTypes.array.isRequired,
        fetchProjectsList: React.PropTypes.func
    }

    componentWillMount () {
        this.props.fetchProjectsList()
    }

    render () {
        const { projects } = this.props
        if (!projects) {
            return <div>Loading data</div>
        }
        const projectsList = _.map(projects, (project) => {
            return (
                <ProjectsListItem
                    key={project.projectId}
                    project={project}
                />
            )
        })

        return (
            <div className="projectList row">
                <div className="col-sm-6 col-sm-offset-3">
                    <ul className="list-group">
                        {projectsList}
                    </ul>
                    <Link to="/projects/new" className="btn btn-default">
                        Создать проект
                    </Link>
                </div>
            </div>
        )
    }
}
