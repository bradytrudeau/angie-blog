import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import './ViewPost.css';
import Header from '../Header/Header';

export default function ViewPost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/post/${slug}`
    }).then(response =>{
      setPostData(response.data[0]);
      console.log('Response:', response.data);
      
    }).catch(err =>{
      console.log('Error in GET', err);
    });
    }, [slug]);

    if (!postData) return <div><Header/><h2 className="loading">Loading...</h2></div>;
  
  
  return (
    <div className='single-post'>
      <Header/>
      <h2 className="loading">{postData.title}</h2>
    </div>
  );
} 