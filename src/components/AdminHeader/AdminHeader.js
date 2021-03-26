import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './AdminHeader.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const AdminHeader = (props) => {

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
        <AnchorLink 
          href='#feed'
          className="nav-link">
            RECENT POSTS
        </AnchorLink>
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
      <div className="nav">
        <Link 
          to='/admin'
          className="nav-link">
            ADMIN HOME
        </Link>
        <Link 
          to='/add'
          className="nav-link">
            ADD POST
        </Link>
        <Link 
          to='/edit'
          className="nav-link">
            EDIT POST
        </Link>
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(AdminHeader);