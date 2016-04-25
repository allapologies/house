'use strict';
import React, { Component } from 'react';
import ProjectsListItem from './ProjectsListItem';

class ProjectsList extends Component {
  render() {
    if (!this.props.projects) {
      return <div>Пожалуйста, подождите. Идёт загрузка</div>
    }

    const projects = this.props.projects.map( (project) => {
      return <ProjectsListItem  key={project.projectId} project={project} />
    });

    return (
      <div>
        <ul className='list-group'>
          {projects}
        </ul>
      </div>
    );
  }
}

export default ProjectsList;