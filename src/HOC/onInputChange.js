'use strict';
import React, { Component, PropTypes } from 'react';

export default function onInputChange (CustomComponent) {

  return class extends Component {

    render() {
      return <CustomComponent
        {...this.state}
        {...this.props}
        {...{onInputChange: this.onInputChange}}
      />
    }

    onInputChange = (event)=> {
      let nextState = {};
      nextState[event.target.name] = event.target.value;
      this.setState(nextState);
    };
  }
}

