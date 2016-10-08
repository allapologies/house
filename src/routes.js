import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, NewProject, NotFound } from './components'
import { ProjectsList, ProjectDescription, SpendsInput } from './containers'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ProjectsList}/>
        <Route path="projects">
            <IndexRoute component={ProjectsList}/>
            <Route path="new" component={NewProject}/>
            <Route path=":id" component={ProjectDescription}/>
            <Route path=":id/spendings/new" component={SpendsInput}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </Route>
)
