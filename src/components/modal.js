import React from 'react';

export default (props) => {
  return (
    <div className='row'>
      <div className='col-xs-12'>
        <h2>Подтведите удаление</h2>
        <button className="btn btn btn-warning">Удалить</button>
        <button className="btn btn btn-warning">Отмена</button>
      </div>
    </div>
  );
}