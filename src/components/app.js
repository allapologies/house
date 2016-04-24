import React from 'react';
import { Component } from 'react';
import ProjectsList from './ProjectsList';
import projects from '../fixtures';

export default class App extends Component {
  render() {
    return (
      <div>
        <ProjectsList projects={projects} />
      </div>
    );
  }
}
