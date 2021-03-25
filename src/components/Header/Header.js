import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Header.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const Header = (props) => {

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
    </div>
  );
};

export default connect(mapStoreToProps)(Header);
