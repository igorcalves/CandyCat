import * as types from '../types'

export function addMoneyRequest(data, callbackError) {
  return {
    type: types.ADD_MONEY_REQUEST,
    data,
    callbackError,
  }
}

export function addMoneySuccess(data, callback, callbackError) {
  return {
    type: types.ADD_MONEY_SUCCESS,
    data,
    callback,
    callbackError,
  }
}

export function addMoneyFailure(data, callbackError) {
  return {
    type: types.ADD_MONEY_FAILURE,
    data,
    callbackError,
  }
}

export function getSavedMoneyRequest(data, callbackError) {
  return {
    type: types.GET_SAVED_MONEY_REQUEST,
    data,
    callbackError,
  }
}

export function getSavedMoneySuccess(data, callback, callbackError) {
  return {
    type: types.GET_SAVED_MONEY_SUCCESS,
    data,
    callback,
    callbackError,
  }
}

export function getSavedMoneyFailure(data, callbackError) {
  return {
    type: types.GET_SAVED_MONEY_FAILURE,
    data,
    callbackError,
  }
}

export function updateMoneyRequest(data, callbackError) {
  return {
    type: types.UPDATE_MONEY_REQUEST,
    data,
    callbackError,
  }
}

export function updateMoneySuccess(data, callback, callbackError) {
  return {
    type: types.UPDATE_MONEY_SUCCESS,
    data,
    callback,
    callbackError,
  }
}

export function updateMoneyFailure(data, callbackError) {
  return {
    type: types.UPDATE_MONEY_FAILURE,
    data,
    callbackError,
  }
}
