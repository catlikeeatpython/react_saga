import { takeEvery, call, put } from 'redux-saga/effects';
import { appList } from '../serive'

console.log("bbbbbbb")
function* fetchLogin(action) {
  console.log(action)
  console.log("sdgsddfdd")
  try {
    const result = yield call(appList,action.payload);
    console.log(result)
    console.log(action)
    yield put({
      type: "FETCH_USER_LOGIN_SUCCEEDED", 
      list: result,
    });
  } catch(e) {
    console.log("aaaa")
    yield put({
      type: "FETCH_USER_LOGIN_FAILURE", 
    });
  }
}

function* watchFetchLogin() {
  yield takeEvery('FETCH_USER_LOGIN_REQUEST', fetchLogin);
}


export const loginSagas = [
  watchFetchLogin(),
]