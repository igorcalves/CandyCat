import * as types from '../types';

export function loginRequest(data, callback) {

  return {
    type: types.LOGIN_REQUEST,
    data,
    callback
  };
}

export function loginSuccess(data, callback) {
  return {
    type: types.LOGIN_SUCCESS,
    data,
    callback
  };
}

export function loginFailure(error, callback) {
  return {
    type: types.LOGIN_FAILURE,
    error,
    callback
  };
}

export function logout(callback) {
  return {
    type: types.LOGOUT,
    callback
  };
}

export function logoutSuccess(callback) {
  return {
    type: types.LOGOUT_SUCCESS,
    callback
  };
}