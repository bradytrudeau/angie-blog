import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { HashLink as Link } from 'react-router-hash-link';
import CardActionArea from '@material-ui/core/CardActionArea';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import './FeedItem.css';

function FeedItem(props) {
  
  return (
    <div className='new-posts'>
      <Link to={"/" + props.post.slug}>
        <Grid item justify="center">
          <Card
            style={{width: "300px"}}
          >
            <h3 className="feed-item-title">
                {props.post.title}
            </h3>
            <p className="feed-item-tag">
              {"Post Type: " + props.post.tag}
            </p>
            <CardMedia
              image={props.post.file_url}
              title="Post"
              style={{ height: "200px" }}
            />
            <CardContent className="cards">
                <p className="feed-description">
                  {props.post.description.slice(0, 100) + '...'}
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



export default FeedItem;