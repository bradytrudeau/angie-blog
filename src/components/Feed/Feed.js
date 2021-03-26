import React, {useState} from 'react';
import './Feed.css';
import FeedItem from '../FeedItem/FeedItem';
import { useSelector, useDispatch } from 'react-redux';
import {Grid} from '@material-ui/core';

function Feed() {
  const feedData = useSelector( (state) => state.postReducer);
  const dispatch = useDispatch();
  console.log('State:', feedData);
  
  
  return (
    <div id='feed' className='new-posts'>
      <Grid container spacing={1}>
        {feedData.map((post, i) => (
          <FeedItem 
            key={i}
            post={post}
          />
        ))}
      </Grid>
    </div>
  );
} 



export default Feed;