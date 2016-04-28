import React from 'react';
import { Route , IndexRoute} from 'react-router';

import App from './components/app';
import ProjectList from './containers/ProjectsList';
import NewProject from './components/NewProject';
import ProjectDescription from './containers/ProjectDescription';

export default (
  <Route path='/' component={App}>
    <Route path='projects' component={ProjectList} />
    <Route path='projects/new' component={NewProject} />
    <Route path='projects/:id' component={ProjectDescription} />
  </Route>
);