import { all, call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from '../actions';
import app from '../../../data/services/firebaseApp';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Toast from 'react-native-toast-message';
import * as types from '../types';
import { logoutSuccess } from '../actions';

const auth = getAuth(app);

const loginRequest = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Dados de Acesso Inválidos ❌',
      text2: 'Verifique seu e-mail e senha e tente novamente',
    });
    return { success: false, user: null };
  }
}


const logoutRequest = async (callback) => {
  try {
    await signOut(auth);
    Toast.show({
      type: 'success',
      text1: 'Logout efetuado com sucesso ✅',
    });
    callback && callback();
    return { success: true };

  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Erro ao efetuar logout ❌',
      text2: 'Tente novamente',
    });
    return { success: false };
    
  }
}

function* login({ data, callback }) {
  const { email, password } = data;
  const response = yield call(loginRequest, email, password);  
  if (response.success) {
    yield put(loginSuccess(response.user));
    callback && callback();
  }
  
}

function * logout({ callback }) {
  const response = yield call(logoutRequest);
  if (response.success) {
    yield put(logoutSuccess());
    callback && callback();
  }
}

export function* rootLogin() {
  yield takeLatest(types.LOGIN_REQUEST, login);
}

export function* rootLogout() {
  yield takeLatest(types.LOGOUT, logout);
}

