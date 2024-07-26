import { all, call } from 'redux-saga/effects';
import { rootLogin, rootLogout } from './user/sagas';


export default function* rootSaga() {
  yield all({
    login: rootLogin(),
    logout: rootLogout()
  }
  );
}