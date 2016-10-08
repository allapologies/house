'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { ProjectsListItem } from '../components'
import { fetchProjectsList } from '../actions'

@connect(
    ({ projects }) => ({ projects }),
    (dispatch) => bindActionCreators({ fetchProjectsList }, dispatch)
)
export class ProjectsList extends React.Component {
    static propTypes = {
        projects: React.PropTypes.object.isRequired,
        fetchProjectsList: React.PropTypes.func
    }

    componentWillMount () {
        this.props.fetchProjectsList()
    }

    render () {
        const projects = this.props.projects.get('items')
        if (!projects) {
            return <div>Пожалуйста, подождите. Идёт загрузка</div>
        }
        const projectsList = projects.map((project) =>
            <ProjectsListItem key={project.projectId} project={project} />
        )
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
