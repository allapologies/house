'use strict';
import React, { Component, PropTypes } from 'react';
import {reduxForm} from 'redux-form';

class SpendsInput extends Component {
  constructor(props) {
    super(props);
    this.state= {
        id: parseInt(props.id),
        stage: 0,
        subStage: 0,
        material: 0,
        supplier: 0,
        quantity: '',
        unit: 0,
        price: '',
        comments: ''
    };
  }

  static contextTypes = {
    router: PropTypes.object
  };
  
  
  getOptions = (property) => {
    return this.props.dictionaries.get(property).map((obj)=> {
      return <option key={obj.id} value={obj.id}>{obj.name}</option>
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.submitSpendings(this.state);
    this.context.router.push(`/projects/${this.state.id}`);
  };

  render() {
    const { fields: {
        stage, subStage, material, supplier,
        quantity, unit, price, comments
    } } = this.props
    return (
      <div className='row'>
        <div className='col-sm-6 col-md-8 col-sm-offset-3 col-md-offset-2'>
          <form
            className='form-horizontal'
            onSubmit={this.onFormSubmit}>
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
                <option value={0} disabled>Материалы</option>
                {this.getOptions('materials')}
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
})(SpendsInput);