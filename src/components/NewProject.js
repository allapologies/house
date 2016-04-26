'use strict';
import React, { Component, PropTypes } from 'react';
import { createProject } from '../actions';
import { connect } from 'react-redux';

class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      projectDescription: ''
    };
  };

  static contextTypes = {
    router: PropTypes.object
  };
  
  onNameInputChange = (event)=> {
    this.setState({ projectName: event.target.value });
  }

  onDescriptionInputChange = (event)=> {
    this.setState({ projectDescription: event.target.value });
  };
  
  onFormSubmit = (event)=> {
    event.preventDefault();
    if (!this.state.projectName) return;
    this.props.createProject({
      projectId: Date.now(),
      title: this.state.projectName,
      description: this.state.projectDescription
    });
    this.setState({ projectName: '' });
    this.context.router.push('/projects')
  };
  
  render() {
    return (
      <div>
        <h2>новый проект</h2>
        <form onSubmit={this.onFormSubmit} className='form-inline'>
          <div className='form-group'>
            <input
              value={this.state.projectName}
              placeholder='введите имя нового проекта'
              onChange={this.onNameInputChange}
              className='form-control'
            />
            <input
              value={this.state.projectDescription}
              placeholder='введите описание проекта'
              onChange={this.onDescriptionInputChange}
              className='form-control'
            />
          </div>
          <button type='submit' className='btn btn-default'>Создать</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createProject })(NewProject);