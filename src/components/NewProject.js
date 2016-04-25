'use strict';
import React, { Component, PropTypes } from 'react';

class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName:''
    };
  }
  
  onInputChange = (event)=> {
    this.setState({ projectName: event.target.value });
  };
  
  onFormSubmit = (event)=> {
    event.preventDefault();
    if (!this.state.projectName) return;
    console.log('----', 'form goes on', this.state.projectName);
    this.setState({ projectName: '' });
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
              onChange={this.onInputChange}
              className='form-control'
            />
          </div>
          <button type='submit' className='btn btn-default'>Создать</button>
        </form>
      </div>
    );
  }
}

export default NewProject;