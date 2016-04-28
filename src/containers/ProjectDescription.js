'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { deleteProject } from '../actions';

class ProjectDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.params.id
    }
  };

  static contextTypes = {
    router: PropTypes.object
  };

  getData = () => {
    const projects = this.props.projects;
    const id = this.state.id;
    var title, description;
    projects.forEach((project) => {
      if (project.projectId == id) {
        title = project.title;
        description = project.description;
      }
    });

    return (
      <div>
        <h2>{title}</h2>
        <h2>{description}</h2>
      </div>
    )
  };

  onDeleteHandler = () => {
    this.props.deleteProject(this.state.id);
    this.context.router.push('/projects/');
  };
  
  render() {
    return (
      <div>
        <h1>{this.state.projectId}</h1>
        {this.getData()}
        <p>Внести затраты</p>
        <p>Редактировать затраты</p>
        <p onClick={ this.onDeleteHandler }>Удалить проект</p>
      </div>
    );
  }
}

function mapStateToProps({projects}) {
  return {
    projects
  };
}

export default connect(mapStateToProps, { deleteProject })(ProjectDescription);