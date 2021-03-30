import React from 'react';
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { HashLink as Link } from 'react-router-hash-link';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import './RecipeItem.css';

function RecipeItem(props) {
  
  return (
    <div className='new-recipes'>
      <Link to={"/" + props.recipe.slug}>
        <Grid item>
          <Card
            style={{width: "300px"}}
          >
            <h3 className="recipe-item-title">
                {props.recipe.title}
            </h3>
            <p className="recipe-item-tag">
              {"recipe Type: " + props.recipe.tag}
            </p>
            <CardMedia
              image={props.recipe.file_url}
              title="recipe"
              style={{ height: "200px" }}
            />
            <CardContent className="cards">
                <p className="recipe-description">
                  {props.recipe.description.slice(0, 100) + '...'}
                </p>
                <div>
                  <Button 
                    variant='contained' 
                    type="submit" 
                    color='primary'>
                      Read More
                  </Button>
                  <IconButton className="icon" aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton className="icon" aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </div>
            </CardContent>
          </Card>
        </Grid>
      </Link>
    </div>
  );
} 



export default RecipeItem;