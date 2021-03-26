import React, {Component} from 'react';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import Button from '@material-ui/core/Button';
import { TextField, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import swal from 'sweetalert';
import moment from 'moment';
import './ImageUpload.css';

class ImageUpload extends Component {

  state = {
    newPost: {
      fileUrl: '',
      postId: null,
      title: '',
      description: '',
      date: '',
      tag: '',
    }
  };

  handleFinishedUpload = info => {
    console.log('File uploaded with filename', info.filename)
    console.log('Access it on s3 at', info.fileUrl)
    this.setState({
      fileUrl: info.fileUrl,
      date: moment(Date()).format(),
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
    event.preventDefault();
    this.props.dispatch({
      type: 'CREATE_PHOTOS',
      payload: this.state.newPost
    });
  };

  // captures the input values in the state
  handleChangeFor = (property, event) => {
    console.log('event happened')
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
      postId: null,
      title: '',
      description: '',
      date: '',
      tag: '',
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
          <Container>
            <Card className="post-form">
              <Typography 
                variant="h4" 
                component="h2"
                className="post-title">
                  Add a Post
              </Typography>
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
                    type='number'
                    value={this.state.newPost.description}
                    fullWidth={true}    
                    onChange={(event) => this.handleChangeFor('description', event)} 
                  />
                  <FormControl id="dropdown" fullWidth>
                    <InputLabel>Tag</InputLabel>
                    <Select
                      labelId="tagLabel"
                      id="demo-simple-select"
                      onChange={(event) => this.handleChangeFor('tag', event)}
                      defaultValue={1}
                      displayEmpty={true}
                    >
                      <MenuItem value={1}>Recipe</MenuItem>
                      <MenuItem value={2}>Restaurant Review</MenuItem>
                    </Select>
                  </FormControl>
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

export default ImageUpload;