import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

class spendsInputForm extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    getOptions = (property) => {
        return this.props.dictionaries.get(property).map((obj)=> {
            return <option key={obj.id} value={obj.id}>{obj.name}</option>
        });
    };

    handleSubmit = (formData) => {
        const { id } = this.props
        this.props.submitSpendings(id, formData);
        this.context.router.push(`/projects/${id}`);
    };


    render() {
        const {
            fields: {
                stage, subStage, material, supplier,
                quantity, unit, price, comments
            }, handleSubmit, resetForm, submitting
        } = this.props
        return (
            <div className='row'>
                <div className='col-sm-6 col-md-8 col-sm-offset-3 col-md-offset-2'>
                    <form
                        className='form-horizontal'
                        onSubmit={handleSubmit(this.handleSubmit)}>
                        <div className='form-group'>
                            <select
                                className='form-control'
                                { ... stage}>
                                <option value={0} disabled>Категория</option>
                                {this.getOptions('stages')}
                            </select>
                        </div>
                        <div className='form-group'>
                            <select
                                className='form-control'
                                {...subStage}>
                                <option value={0} disabled>Подкатегория</option>
                                {this.getOptions('subStages')}
                            </select>
                        </div>
                        <div className='form-group'>
                            <select
                                className='form-control'
                                {...material}>
                                {this.getOptions('materials')}
                                <option value={0} disabled>Материалы</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <select
                                className='form-control'
                                {...supplier}>
                                <option value={0}>Поставщик</option>
                                <option value="1">Первый</option>
                                <option value="1">Второй</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                {...quantity} />
                        </div>
                        <div className='form-group'>
                            <select
                                className='form-control'
                                {...unit}>
                                <option value={0} disabled>Ед.изм</option>
                                {this.getOptions('units')}
                            </select>
                        </div>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                {...price}
                            />
                        </div>
                        <div className='form-group'>
              <textarea
                  className='form-control'
                  rows="3"
                  {...comments}/>
                        </div>
                        <div className='form-group'>
                            <button type='submit' className='btn btn-default'>Сохранить</button>
                            <button type='reset' className='btn btn-default' onClick={resetForm} >Сбросить</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'spendsInput',
    fields: ['stage', 'subStage', 'material', 'supplier', 'quantity', 'unit', 'price', 'comments']
})(spendsInputForm);