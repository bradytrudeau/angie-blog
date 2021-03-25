import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <div className="loginPage">
        <div className="header">
          <h2 className="nav-title">Angie Trudeau</h2>
          <h4 className="nav-subtitle">Food Blogger + Recipes</h4>
        </div>
        <LoginForm />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
