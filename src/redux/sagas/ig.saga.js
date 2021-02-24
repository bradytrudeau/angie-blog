import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchFeed(action) {
    let response = yield axios({
      method: 'GET',
      url: `/api/ig/`
    });  
    console.log('IG Feed:', response.data.graphql.user.edge_owner_to_timeline_media.edges);
    yield put({
      type: 'SET_FEED',
      payload: response.data
    });
  }

function* igSaga() {
  yield takeLatest('FETCH_FEED', fetchFeed);
}

export default igSaga;