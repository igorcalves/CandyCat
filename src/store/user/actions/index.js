import * as types from '../types';

export function loginRequest(data, callback, callbackError) {

  return {
    type: types.LOGIN_REQUEST,
    data,
    callback,
    callbackError
  };
}

export function loginSuccess(data, callback, callbackError) {
  return {
    type: types.LOGIN_SUCCESS,
    data,
    callback,
    callbackError
  };
}

export function loginFailure(error, callback, callbackError) {
  return {
    type: types.LOGIN_FAILURE,
    error,
    callback,
    callbackError
  };
}

export function logout(callback, callbackError) {
  return {
    type: types.LOGOUT,
    callback,
    callbackError
  };
}

export function logoutSuccess(callback, callbackError) {
  return {
    type: types.LOGOUT_SUCCESS,
    callback,
    callbackError
  };
}