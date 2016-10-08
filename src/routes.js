import React from 'react'
import { Route, IndexRoute } from 'react-router'
import SpendsInput from './containers/NewSpends'
import App from './components/app'
import { ProjectsList } from './containers'
import {NewProject} from './components'
import ProjectDescription from './containers'
import NotFound from './components'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ProjectsList} />
        <Route path="projects">
            <IndexRoute component={ProjectsList} />
            <Route path="new" component={NewProject} />
            <Route path=":id" component={ProjectDescription} />
            <Route path=":id/spendings/new" component={SpendsInput} />
        </Route>
        <Route path="*" component={NotFound} />
    </Route>
)