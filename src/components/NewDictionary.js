import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form';

class NewDictionary extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        const {fields: {dictionaryName}} = this.props
        return (
            <div className='row'>
                <div className='col-sm-6 col-sm-offset-3'>
                    <h2>новый справочник</h2>
                    <form onSubmit={this.onFormSubmit} className='form-horizontal'>
                        <div className='form-group'>
                            <div className='col-sm-6'>
                                <input
                                    placeholder='введите имя нового проекта'
                                    { ...dictionaryName }
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='col-sm-6'>
                                <button type='submit' className='btn btn-default'>Создать</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'createDictionary',
    fields: ['dictionaryName']
})(NewDictionary)