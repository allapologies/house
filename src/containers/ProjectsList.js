'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import ProjectsListItem from '../components/ProjectsListItem';
import { fetchProjects } from '../actions';


class ProjectsList extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }
  
  render() {
    if (!this.props.projects.get('all')) {
      return <div>Пожалуйста, подождите. Идёт загрузка</div>
    }

    const projects = this.props.projects.get('all').map( (project) => {
      return <ProjectsListItem  key={project.projectId} project={project} />
    });

    return (
      <div className='projectList row'>
        <div className='col-sm-6 col-sm-offset-3'>
          <ul className='list-group'>
            {projects}
          </ul>
          <Link to='/projects/new' className='btn btn-default'>
            Создать проект
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { projects: state.projects };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProjects }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);