import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Header.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const Header = (props) => {

  return (
    <div className="header">
      <h1 className="nav-title">Angie Trudeau</h1>
      <h4 className="nav-subtitle">Food Blogger + Recipes</h4>
      <div className="nav">
        <Link 
            to='/home'
            className="nav-link">
                HOME
        </Link>
        <Link
          smooth 
          to='/home#feed'
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
