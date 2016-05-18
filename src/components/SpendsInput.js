'use strict';
import React, { Component, PropTypes } from 'react';
import onInputChange from '../HOC/onInputChange';

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
    return this.props.dictionaries[property].map((obj)=> {
      return <option key={obj.id} value={obj.id}>{obj.name}</option>
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.submitSpendings(this.state);
    this.context.router.push(`/projects/${this.state.id}`);
  };

  render() {
    return (
      <div className='row'>
        <div className='col-sm-6 col-md-8 col-sm-offset-3 col-md-offset-2'>
          <form
            className='form-horizontal'
            onSubmit={this.onFormSubmit}>
            <div className='form-group'>
              <select
                className='form-control'
                name='stage'
                value={this.state.stage}
                onChange={this.props.onInputChange}>
                <option value={0} disabled>Категория</option>
                {this.getOptions('stages')}
              </select>
            </div>
            <div className='form-group'>
              <select
                className='form-control'
                name='subStage'
                value={this.state.subStage}
                onChange={this.props.onInputChange}>
                <option value={0} disabled>Подкатегория</option>
                {this.getOptions('subStages')}
              </select>
            </div>
            <div className='form-group'>
              <select
                className='form-control'
                name='material'
                value={this.state.material}
                onChange={this.props.onInputChange}>
                <option value={0} disabled>Материалы</option>
                {this.getOptions('materials')}
              </select>
            </div>
            <div className='form-group'>
              <select
                className='form-control'
                name='suppliers'
                value={this.state.supplier}
                onChange={this.props.onInputChange}>
                <option value={0}>Поставщик</option>
                <option value="1">Первый</option>
                <option value="1">Второй</option>
              </select>
            </div>
            <div className='form-group'>
              <input
                type='text'
                name='quantity'
                className='form-control'
                placeholder='количество'
                value={this.state.quantity}
                onChange={this.props.onInputChange}/>
            </div>
            <div className='form-group'>
              <select
                className='form-control'
                name='unit'
                value={this.state.unit}
                onChange={this.props.onInputChange}>
                <option value={0} disabled>Ед.изм</option>
                {this.getOptions('units')}
              </select>
            </div>
            <div className='form-group'>
              <input
                type='text'
                name='price'
                className='form-control'
                placeholder='цена'
                value={this.state.price}
                onChange={this.props.onInputChange}/>
            </div>
            <div className='form-group'>
              <textarea
              className='form-control'
              name='comments'
              rows="3"
              placeholder='комментарии'
              value={this.state.comments}
              onChange={this.props.onInputChange}/>
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

export default onInputChange(SpendsInput);