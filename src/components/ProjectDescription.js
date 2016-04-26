import React from 'react';

export default (props) => {
  if (!props.project) return (<div>Загрузка информации о проекте...</div>);
  const { id, title, description } = props.project;
  return (
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  );
}