import React, {useState} from 'react';
import './Feed.css';
import FeedItem from '../FeedItem/FeedItem';
import { useSelector, useDispatch } from 'react-redux';
import {Grid} from '@material-ui/core';
import mapStoreToProps from '../../redux/mapStoreToProps';

function Feed() {
  const igFeedData = useSelector( (state) => state.igReducer);
  const dispatch = useDispatch();
  console.log('State:', igFeedData);
  
  
  return (
    <div className='new-posts'>
      <Grid container spacing={1}>
        {/* {igFeedData.map((igPost, i) => (
          <FeedItem 
            key={i}
            igPost={igPost}
          />
        ))} */}
      </Grid>
    </div>
  );
} 



export default Feed;