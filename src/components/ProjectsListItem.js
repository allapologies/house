import React from 'react'
import { Link } from 'react-router'

export const ProjectsListItem = (props) => {
    const { projectId, title } = props.project
    const url = `/projects/${projectId}`

    return (
      <li className="list-group-item">
        <Link to={url}>{title}</Link>
      </li>
    )
}

ProjectsListItem.propTypes = {
    project: React.PropTypes.shape({
        projectId: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired
    })
}
