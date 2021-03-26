import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './FeedItem.css';

function FeedItem(props) {
  
  return (
    <div className='new-posts'>
      <Grid item xs={3} spacing={3} justify="center">
        <Card
          style={{width: "300px"}}
        >
          <CardMedia
            image={props.post.file_url}
            title="Post"
            style={{ height: "150px" }}
          />
          <CardContent className="cards">
            {/* <Typography gutterBottom variant="h5" component="h2">
              {props.post.title}
            </Typography>
            <Typography variant="body2" component="p">
              {props.post.description}
            </Typography> */}
            <h3>
              {props.post.title}
            </h3>
            <p>
              {props.post.description}
            </p>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
} 



export default FeedItem;