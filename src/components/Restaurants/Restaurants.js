import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Restaurants.css';
import Header from '../Header/Header';
import {Grid} from '@material-ui/core';
import RestaurantItem from '../RestaurantItem/RestaurantItem';


class Restaurants extends Component {

  componentDidMount() {
    this.setRestaurants();
  }

  setRestaurants = () => {
    this.props.dispatch({
      type: 'FETCH_RESTAURANT',
    });
  }

  render() {
    return (
      <div className="restaurants">
        <Header/>
        <div className="restaurants-body">
          <h2 className="nav-subtitle">Restaurants</h2>
          <Grid container justify='space-around'>
          {this.props.store.restaurantReducer.map((restaurant, i) => (
            <RestaurantItem 
              key={i}
              restaurant={restaurant}
            />
          ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Restaurants);