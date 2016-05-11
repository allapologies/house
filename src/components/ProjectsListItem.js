import React from 'react';
import { Link } from 'react-router'

export default (props) => {
  const { projectId, title} = props.project;
  const url = `/projects/${projectId}`;
  return (
      <li className='list-group-item'>
        <Link to={url}>{title}</Link>
      </li>
    );
}