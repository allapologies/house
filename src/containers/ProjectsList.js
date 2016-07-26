'use strict' 
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ProjectsListItem from '../components/ProjectsListItem' 
import { fetchProjects } from '../actions'


class ProjectsList extends Component {
    static propTypes = {
        projects: React.PropTypes.object.isRequired,
        fetchProjects: React.PropTypes.func
    }

    componentWillMount() {
        this.props.fetchProjects() 
    }

    render() {
        const projects = this.props.projects.get('items')
        if (!projects) {
            return <div>Пожалуйста, подождите. Идёт загрузка</div>
        }
        const projectsList = projects.map((project) => {
            return <ProjectsListItem key={project.projectId} project={project}/>
        }) 

        return (
            <div className='projectList row'>
                <div className='col-sm-6 col-sm-offset-3'>
                    <ul className='list-group'>
                        {projectsList}
                    </ul>
                    <Link to='/projects/new' className='btn btn-default'>
                        Создать проект
                    </Link>
                </div>
            </div>
        ) 
    }
}

function mapStateToProps(state) {
    return {projects: state.projects} 
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchProjects}, dispatch) 
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList) 