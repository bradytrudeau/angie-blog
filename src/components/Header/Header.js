import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Header.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const Header = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="header">
      <h2 className="nav-title">Angie Trudeau</h2>
      <h4 className="nav-subtitle">Food Blogger + Recipes</h4>
      <div className="nav">
        <Link 
            to='/home'
            className="nav-link">
                HOME
        </Link>
        <Link 
            to='/feed'
            className="nav-link">
                RECENT POSTS
        </Link>
        <Link 
            to='/about'
            className="nav-link">
                ABOUT
        </Link>
        <Link 
            to='/recipes'
            className="nav-link">
                RECIPES
        </Link>
        <Link 
            to='/restaurants'
            className="nav-link">
                RESTAURANTS
        </Link>
        <Link 
            to='/contact'
            className="nav-link">
                CONTACT
        </Link>
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Header);
