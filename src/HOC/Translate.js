'use strict';
import React, { Component as ReactComponent, PropTypes } from 'react';
import dictionary from './dictionary';

export default (Component)=> class extends ReactComponent {

  static contextTypes = {
    locale: PropTypes.string
  };

  translate = (text) => {
    console.log('translating :', text);
    return dictionary['ru'][text];
  };
  
  render(){
    console.log(this.context);
    return <Component {...this.props} translate={this.translate} />
  }
}