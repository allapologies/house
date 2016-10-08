import React from 'react'

export const Modal = (props) => {
    return (
        <div className='modal_confirm_delete'>
            <div className='window'>
                <div className='inner'>
                    <h3>Подтвердите удаление проекта</h3>
                    <button onClick={props.onConfirm} className="btn btn btn-warning">
                        Удалить
                    </button>
                    <button onClick={props.onCancel} className="btn btn btn-default">
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    onConfirm: React.PropTypes.func,
    onCancel: React.PropTypes.func
}
