import React, {useState} from 'react';
import './Feed.css';
import FeedItem from '../FeedItem/FeedItem';
import { useSelector, useDispatch } from 'react-redux';
import {Grid} from '@material-ui/core';

function Feed() {
  const feedData = useSelector( (state) => state.postReducer);
  console.log('State:', feedData);
  
  
  return (
    <div id='feed' className='new-posts'>
      <h2 className="nav-subtitle">Recent Posts</h2>
      <Grid container justify='space-around'>
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