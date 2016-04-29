'use strict';
import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { submitSpendings } from '../actions';

class SpendsInput extends Component {
  constructor(props) {
    super(props);
    this.state= {
        id: props.params.id,
        stage: '',
        subStage: '',
        material: '',
        supplier: '',
        quantity: '',
        price: '',
        comments: ''
    };
  }
  static contextTypes = {
    router: PropTypes.object
  };

  onInputChange = (event)=> {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.spendings);
    this.props.submitSpendings(this.state);
    console.log(this.state);
    let url = `/projects/${this.state.id}`;
    this.context.router.push(url);
  };

  render() {
    return (
      <div>
        <h2>Название проекта</h2>
        <form
          className='form-horizontal'
          onSubmit={this.onFormSubmit}>
          <select
            className='form-control'
            name='stage'
            value={this.state.stage}
            onChange={this.onInputChange}>
              <option value="1">Фундамент</option>
              <option value="2">Стены</option>
              <option value="3">Кровля</option>
          </select>
          <select
            className='form-control'
            name='subStage'
            value={this.state.subStage}
            onChange={this.onInputChange}>
              <option value="1">подэтап1</option>
              <option value="1">подэтап2</option>
              <option value="1">подэтап3</option>
          </select>
          <select
            className='form-control'
            name='material'
            value={this.state.material}
            onChange={this.onInputChange}>
              <option value="1">Материал1</option>
              <option value="1">Материал2</option>
              <option value="1">создать</option>
            </select>
          <select
            className='form-control'
            name='supplier'
            value={this.state.supplier}
            onChange={this.onInputChange}>
            <option value="1">Поставщик1</option>
            <option value="1">Поставщик2</option>
            <option value="1">создать</option>
          </select>
          <input
            type='text'
            name='quantity'
            className='form-control'
            placeholder='количество'
            value={this.state.quantity}
            onChange={this.onInputChange}/>
          <input
            type='text'
            name='price'
            className='form-control'
            placeholder='цена'
            value={this.state.price}
            onChange={this.onInputChange}/>
          <textarea
            className='form-control'
            name='comments'
            rows="3"
            placeholder='комментарии'
            value={this.state.comments}
            onChange={this.onInputChange}/>
          <button type='submit' className='btn btn-default'>Сохранить</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { submitSpendings })(SpendsInput);