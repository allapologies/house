import React from 'react';
import { Route , IndexRoute } from 'react-router';
import SpendsInput from './containers/NewSpends';
import App from './components/app';
import ProjectList from './containers/ProjectsList';
import NewProject from './components/NewProject';
import ProjectDescription from './containers/ProjectDescription';
import NotFound from './components/NotFound';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={ProjectList} />
    <Route path='projects'>
        <IndexRoute component={ProjectList} />
        <Route path='new' component={NewProject} />
          <Route path=':id' component={ProjectDescription} />
          <Route path=':id/spendings/new' component={SpendsInput} />
      </Route>
    <Route path='*' component={NotFound} />
  </Route>
);