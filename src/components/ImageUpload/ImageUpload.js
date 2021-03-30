import React, {Component} from 'react';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import { TextField, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import swal from 'sweetalert';
import moment from 'moment';
import './ImageUpload.css';
import AdminHeader from '../AdminHeader/AdminHeader';

class ImageUpload extends Component {
  state = {
    newPost: {
      fileUrl: '',
      title: '',
      description: '',
      date: '',
      tag: '',
      slug: ''
    }
  };

  handleFinishedUpload = info => {
    console.log('File uploaded with filename', info.filename)
    console.log('Access it on s3 at', info.fileUrl)
    this.setState({
      newPost: {
        fileUrl: info.fileUrl,
        date: moment(Date()).format(),
      }
    });
  }

  confirmationSubmitPhoto = (event) => {
    if(this.state.fileUrl === ''){
      swal(`Please select a photo to upload, you stinky wizard!`);
    } else {
        this.submitPhoto(event);
    }
  }

  submitPhoto = (event) => {
    console.log('NEW POST', this.state.newPost);
    
    event.preventDefault();
    this.props.dispatch({
      type: 'CREATE_POST',
      payload: this.state.newPost
    });
    this.handleCancel();
  };

  // captures the input values in the state
  handleChangeFor = (property, event) => {
    this.setState({
      newPost: {
        ...this.state.newPost,
        [property]: event.target.value,
      }
    });
  }

  handleCancel = () => {
  this.setState({
    newPost: {
      fileUrl: '',
      title: '',
      description: '',
      date: '',
      tag: '',
      slug: ''
    }
    });
  }
  render() {
    const uploadOptions = {
        // signingUrlQueryParams: {uploadType: 'avatar'},
    }
    const s3Url = `http://${process.env.REACT_APP_S3_BUCKET}.s3.amazonaws.com`;
      return (
        <div>
          <AdminHeader/>
          <Container>
            <Card className="post-form">
              <h2>
                Add a Post
              </h2>
              <DropzoneS3Uploader
                onFinish={this.handleFinishedUpload}
                s3Url={s3Url}
                maxSize={1024 * 1024 * 5}
                upload={uploadOptions}
                className="uploader"
              >
              </DropzoneS3Uploader>
              <CardContent className="postFormInside">
                <form className="newSongForm" onSubmit={this.submitPhoto}>
                  <TextField 
                    label='Title'
                    type='text'
                    value={this.state.newPost.title}  
                    fullWidth={true}  
                    onChange={(event) => this.handleChangeFor('title', event)} 
                  />
                  <TextField 
                    label='Description'
                    type='text'
                    value={this.state.newPost.description}
                    fullWidth={true}    
                    onChange={(event) => this.handleChangeFor('description', event)} 
                    multiline
                  />
                  <FormControl id="dropdown" fullWidth>
                    <InputLabel>Tag</InputLabel>
                    <Select
                      labelId="tagLabel"
                      id="demo-simple-select"
                      onChange={(event) => this.handleChangeFor('tag', event)}
                      value={this.state.newPost.tag}
                      displayEmpty={true}
                    >
                      <MenuItem value='recipe'>Recipe</MenuItem>
                      <MenuItem value='restaurant'>Restaurant Review</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField 
                    label='Slug'
                    type='text'
                    value={this.state.newPost.slug}
                    fullWidth={true}    
                    onChange={(event) => this.handleChangeFor('slug', event)} 
                  />
                  <h4>Ex: www.example.com/slug</h4>
                  <div className="add-btn">
                    <Button variant='contained' type="submit" color='primary'>Add a New Post</Button>
                  </div>
                  <div className="cancel-btn">
                    <Button variant='contained' onClick={this.handleCancel} color='primary'>Cancel</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Container>
        </div> 
      )
  }
}

export default connect(mapStoreToProps)(ImageUpload);