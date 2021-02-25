import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Grid} from '@material-ui/core';

function FeedItem(props) {
  
  
  
  return (
    <div className='new-posts'>
      {/* <Grid container item xs={4} spacing={3} justify="center">
        <h1>{props.igPost.node.edge_liked_by.count}</h1>
      </Grid> */}
    </div>
  );
} 



export default FeedItem;