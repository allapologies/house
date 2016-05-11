'use strict';
import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { submitSpendings, fetchDictionaries } from '../actions';

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
        unit: '',
        price: '',
        comments: ''
    };
  }
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchDictionaries();
  };

  onInputChange = (event)=> {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.submitSpendings(this.state);
    let url = `/projects/${this.state.id}`;
    this.context.router.push(url);
  };

  getOptions = (property) => {
    return this.props.dictionaries[property].map((obj)=> {
      return <option key={obj.id} value={obj.id}>{obj.name}</option>
    });
  }

  render() {
    if (!this.props.dictionaries.stages) return <div>loading...</div>
    return (
      <div className='row'>
        <div className='col-sm-6 col-md-8 col-sm-offset-3 col-md-offset-2'>
          <h2></h2>
          <form
            className='form-horizontal'
            onSubmit={this.onFormSubmit}>
            <div className='form-group'>
              <select
                className='form-control'
                name='stage'
                value={this.state.stage}
                onChange={this.onInputChange}>
                <option value='stage' disabled>Категория</option>
                {this.getOptions('stages')}
              </select>
            </div>
            <div className='form-group'>
              <select
                className='form-control'
                name='subStage'
                value={this.state.subStage}
                onChange={this.onInputChange}>
                <option value='subStages' disabled>Подкатегория</option>
                {this.getOptions('subStages')}
              </select>
            </div>
            <div className='form-group'>
              <select
                className='form-control'
                name='material'
                value={this.state.material}
                onChange={this.onInputChange}>
                <option value='materials' disabled>Материалы</option>
                {this.getOptions('materials')}
              </select>
            </div>
            <div className='form-group'>
              <select
                className='form-control'
                name='supplier'
                value={this.state.supplier}
                onChange={this.onInputChange}>
                <option value="1">Поставщик1</option>
                <option value="1">Поставщик2</option>
                <option value="1">создать</option>
              </select>
            </div>
            <div className='form-group'>
              <input
                type='text'
                name='quantity'
                className='form-control'
                placeholder='количество'
                value={this.state.quantity}
                onChange={this.onInputChange}/>
            </div>
            <div className='form-group'>
              <select
                className='form-control'
                name='unit'
                value={this.state.unit}
                onChange={this.onInputChange}>
                <option value='units' disabled>Ед.изм</option>
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
                onChange={this.onInputChange}/>
            </div>
            <div className='form-group'>
              <textarea
              className='form-control'
              name='comments'
              rows="3"
              placeholder='комментарии'
              value={this.state.comments}
              onChange={this.onInputChange}/>
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

function mapStateToProps({dictionaries}) {
  return {
    dictionaries
  };
}

export default connect(mapStateToProps, { submitSpendings, fetchDictionaries })(SpendsInput);