import React from 'react';
import { Route , IndexRoute} from 'react-router';
import ProjectList from './containers/ProjectsList';
import NewProject from './components/NewProject';
import App from './components/app';

export default (
  <Route path='/' component={App}>
    <Route path='projects' component={ProjectList} />
    <Route path='projects/new' component={NewProject} />
  </Route>
);