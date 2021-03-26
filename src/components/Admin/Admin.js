import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ImageUpload from '../ImageUpload/ImageUpload';
import './Admin.css';

class Admin extends Component {
  render() {
    return (
      <div>
        <h1 className="welcome">Welcome, Stinky Wizard!</h1>
        <ImageUpload/>
        <LogOutButton className="log-in" />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Admin);
