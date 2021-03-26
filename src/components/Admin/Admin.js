import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ImageUpload from '../ImageUpload/ImageUpload';
import './Admin.css';
import AdminHeader from '../AdminHeader/AdminHeader';

class Admin extends Component {
  render() {
    return (
      <div>
        <AdminHeader/>
        <LogOutButton className="log-in" />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Admin);
