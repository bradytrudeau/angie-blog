import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchRecipe(action) {
    let response = yield axios({
      method: 'GET',
      url: `/api/recipe/`
    });  
    console.log('Recipe Feed:', response.data);
    yield put({
      type: 'SET_RECIPE',
      payload: response.data
    });
  }


function* recipeSaga() {
    yield takeLatest('FETCH_RECIPE', fetchRecipe);
};

export default recipeSaga;