import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Recipes.css';
import Header from '../Header/Header';
import {Grid} from '@material-ui/core';
import RecipeItem from '../RecipeItem/RecipeItem';


class Recipes extends Component {

  componentDidMount() {
    this.setRecipes();
  }

  setRecipes = () => {
    this.props.dispatch({
      type: 'FETCH_RECIPE',
    });
  }

  render() {
    return (
      <div className="recipes">
        <Header/>
        <div className="recipes-body">
          <h2 className="nav-subtitle">Recipes</h2>
          <Grid container justify='space-around'>
          {this.props.store.recipeReducer.map((recipe, i) => (
            <RecipeItem 
              key={i}
              recipe={recipe}
            />
          ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Recipes);