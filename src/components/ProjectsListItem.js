import React from 'react';

export default (props) => {
  const { id, title} = props.project;
  return (
      <li className='list-group-item'>{title}
        &nbsp;<button type="button" className="btn btn-sm btn-warning">править</button>
        &nbsp;<button type="button" className="btn btn-sm btn-danger">удалить</button>
      </li>
    );
}