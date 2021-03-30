import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchRestaurant(action) {
    let response = yield axios({
      method: 'GET',
      url: `/api/restaurant/`
    });  
    console.log('Restaurant Feed:', response.data);
    yield put({
      type: 'SET_RESTAURANT',
      payload: response.data
    });
  }


function* restaurantSaga() {
    yield takeLatest('FETCH_RESTAURANT', fetchRestaurant);
};

export default restaurantSaga;