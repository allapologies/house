import React from 'react';
import { Route , IndexRoute, IndexRedirect } from 'react-router';
import SpendsInput from './containers/SpendsInput';

import App from './components/app';
import ProjectList from './containers/ProjectsList';
import NewProject from './components/NewProject';
import ProjectDescription from './containers/ProjectDescription';

export default (
  <Route path='/' component={App}>
    <IndexRedirect to='projects' />
    <Route path='projects' component={ProjectList} />
    <Route path='projects/new' component={NewProject} />
    <Route path='projects/:id' component={ProjectDescription} />
    <Route path='projects/:id/spendings/new' component={SpendsInput} />
  </Route>
);