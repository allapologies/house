'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import ProjectsListItem from '../components/ProjectsListItem';


class ProjectsList extends Component {
  render() {
    if (!this.props.projects) {
      return <div>Пожалуйста, подождите. Идёт загрузка</div>
    }

    const projects = this.props.projects.map( (project) => {
      return <ProjectsListItem  key={project.projectId} project={project} />
    });

    return (
      <div className='projectList'>
        <ul className='list-group'>
          {projects}
        </ul>
        <Link to='/projects/new' className='btn btn-default'>
            Создать проект
        </Link>
      </div>
    );
  }
}

function mapStateToProps({projects}) {
  return { projects };
};

export default connect(mapStateToProps)(ProjectsList);