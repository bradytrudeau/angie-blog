import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';


function* fetchPost(action) {
    let response = yield axios({
      method: 'GET',
      url: `/api/post/`
    });  
    console.log('Post Feed:', response.data);
    yield put({
      type: 'SET_POST',
      payload: response.data
    });
  }

  // Function sends post creation data
function* createPostSaga(action) {
    try{
        console.log('ACTION PAYLOAD', action.payload);    
        let response = yield axios({
            method: 'POST',
            url: '/api/post',
            data: action.payload
        });
    }
    catch (error) {
        console.log('CREATE PHOTOS RESPONSE:', error);
        if (error.response.status === 400) {
            swal({
                title: `Error!`,
                text: `Ask your husband for help!`,
                buttons: {
                cancel: "Ok",
                }
            })
        }
    }
};


function* postSaga() {
    yield takeLatest('CREATE_POST', createPostSaga);
    yield takeLatest('FETCH_POST', fetchPost);
};

export default postSaga;