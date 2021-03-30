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
import './RestaurantItem.css';

function RestaurantItem(props) {

  return (
    <div className='new-restaurants'>
      <Link to={"/" + props.restaurant.slug}>
        <Grid item>
          <Card
            style={{width: "300px"}}
          >
            <h3 className="restaurant-item-title">
                {props.restaurant.title}
            </h3>
            <p className="restaurant-item-tag">
              {"Post Type: " + props.restaurant.tag}
            </p>
            <CardMedia
              image={props.restaurant.file_url}
              title="restaurant"
              style={{ height: "200px" }}
            />
            <CardContent className="cards">
                <p className="restaurant-description">
                  {props.restaurant.description.slice(0, 100) + '...'}
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



export default RestaurantItem;