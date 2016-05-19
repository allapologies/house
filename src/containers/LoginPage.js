'use strict';
import React, { Component, PropTypes } from 'react';

class LoginPage extends Component {
  constructor(props) {
    super();
    this.state = {
      user: null
    };
  }
  
  static propTypes = {
      
  };

  static contextTypes = {
    router: PropTypes.object
  };

  static childContextTypes = {
    user: PropTypes.string
  };

  getChildContext() {
    return {
      user: this.state.user
    };
  }

  onUserInputChange = (event)=> {
    this.setState({ user: event.target.value });
  };

  onFormSubmit = (event)=> {
    event.preventDefault();
    if(!this.state.user) return;
    console.log(`user ${this.state.user} is entering....`);
    this.context.router.push('/projects');
  };
  
  render() {
    return (
      <div>
        <div className='loginBox'>
          <form onSubmit={this.onFormSubmit} className='form-horizontal'>
            <div className='form-group'>
              <div className='col-xs-12'>
                <input
                  value={this.state.user}
                  placeholder='введите имя'
                  onChange={this.onUserInputChange}
                  className='form-control'
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-xs-12'>
                <button type='submit' className='btn btn-success'>Войти</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;