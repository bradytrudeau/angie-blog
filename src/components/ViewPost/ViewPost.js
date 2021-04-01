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
import ImageGallery from 'react-image-gallery';

export default function ViewPost() {
  const [postData, setPostData] = useState(null);
  const [images, setImages] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/post/${slug}`
    }).then(response =>{
      setPostData(response.data[0]);
      if (response.data.length === 1) {
        setImages([
          {
            original: response.data[0].photo,
            thumbnail: response.data[0].photo,
          },
        ])
      }
      else if(response.data.length === 2) {
        setImages([
          {
            original: response.data[0].photo,
            thumbnail: response.data[0].photo,
          },
          {
            original: response.data[1].photo,
            thumbnail: response.data[1].photo,
          },        
        ])
      }
      else if(response.data.length === 3) {
        setImages([
          {
            original: response.data[0].photo,
            thumbnail: response.data[0].photo,
          },
          {
            original: response.data[1].photo,
            thumbnail: response.data[1].photo,
          },        
          {
            original: response.data[2].photo,
            thumbnail: response.data[2].photo,
          },
        ])
      }
      else if(response.data.length === 4) {
        setImages([
          {
            original: response.data[0].photo,
            thumbnail: response.data[0].photo,
          },
          {
            original: response.data[1].photo,
            thumbnail: response.data[1].photo,
          },        
          {
            original: response.data[2].photo,
            thumbnail: response.data[2].photo,
          },
          {
            original: response.data[3].photo,
            thumbnail: response.data[3].photo,
          },
        ])
      }
      else if(response.data.length === 5) {
        setImages([
          {
            original: response.data[0].photo,
            thumbnail: response.data[0].photo,
          },
          {
            original: response.data[1].photo,
            thumbnail: response.data[1].photo,
          },        
          {
            original: response.data[2].photo,
            thumbnail: response.data[2].photo,
          },
          {
            original: response.data[3].photo,
            thumbnail: response.data[3].photo,
          },
          {
            original: response.data[4].photo,
            thumbnail: response.data[4].photo,
          },
        ])
      }
      else if(response.data.length === 6) {
        setImages([
          {
            original: response.data[0].photo,
            thumbnail: response.data[0].photo,
          },
          {
            original: response.data[1].photo,
            thumbnail: response.data[1].photo,
          },        
          {
            original: response.data[2].photo,
            thumbnail: response.data[2].photo,
          },
          {
            original: response.data[3].photo,
            thumbnail: response.data[3].photo,
          },
          {
            original: response.data[4].photo,
            thumbnail: response.data[4].photo,
          },
          {
            original: response.data[5].photo,
            thumbnail: response.data[5].photo,
          },
        ])
      }
      console.log('Response:', response.data);
    }).catch(err =>{
      console.log('Error in GET', err);
    });
    }, [slug]);

    if (!postData) return <div><Header/><h2 className="loading">Loading...</h2></div>;
  
  
  return (
    <div className='single-post'>
      <Header/>
      <ImageGallery
        items={images}
      />
      <h2 className="loading">{postData.title}</h2>
      <p className="single-post-body">{postData.description}</p>
    </div>
  );
} 