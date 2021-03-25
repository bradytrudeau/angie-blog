import React, {useState} from 'react';
import './Feed.css';
import FeedItem from '../FeedItem/FeedItem';
import { useSelector, useDispatch } from 'react-redux';
import {Grid} from '@material-ui/core';

function Feed() {
  const igFeedData = useSelector( (state) => state.igReducer);
  const dispatch = useDispatch();
  console.log('State:', igFeedData);
  
  
  return (
    <div id='feed' className='new-posts'>
      <h1>HERE IS A GRID</h1>
      {/* <Grid container spacing={1}>
        {igFeedData.map((igPost, i) => (
          <FeedItem 
            key={i}
            igPost={igPost}
          />
        ))}
      </Grid> */}
    </div>
  );
} 



export default Feed;