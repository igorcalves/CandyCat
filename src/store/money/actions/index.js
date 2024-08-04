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

export function deleteMoneyRequest(data, callbackError) {
  return {
    type: types.DELETE_MONEY_REQUEST,
    data,
    callbackError,
  }
}

export function deleteMoneySuccess(data, callback, callbackError) {
  return {
    type: types.DELETE_MONEY_SUCCESS,
    data,
    callback,
    callbackError,
  }
}

export function deleteMoneyFailure(data, callbackError) {
  return {
    type: types.DELETE_MONEY_FAILURE,
    data,
    callbackError,
  }
}

export function getTotalRequest(data, callbackError) {
  return {
    type: types.GET_TOTAL_REQUEST,
    data,
    callbackError,
  }
}

export function getTotalSuccess(data, callback, callbackError) {
  return {
    type: types.GET_TOTAL_SUCCESS,
    data,
    callback,
    callbackError,
  }
}

export function getTotalFailure(data, callbackError) {
  return {
    type: types.GET_TOTAL_FAILURE,
    data,
    callbackError,
  }
}

export function depositMoneyRequest(data, callbackError) {
  return {
    type: types.DEPOSIT_MONEY_REQUEST,
    data,
    callbackError,
  }
}

export function depositMoneySuccess(data, callback, callbackError) {
  console.log('data', data)
  return {
    type: types.DEPOSIT_MONEY_SUCCESS,
    data,
    callback,
    callbackError,
  }
}

export function depositMoneyFailure(data, callbackError) {
  return {
    type: types.DEPOSIT_MONEY_FAILURE,
    data,
    callbackError,
  }
}

export function debtMoneyRequest(data, callbackError) {
  return {
    type: types.DEBT_MONEY_REQUEST,
    data,
    callbackError,
  }
}

export function debtMoneySuccess(data, callback, callbackError) {
  return {
    type: types.DEBT_MONEY_SUCCESS,
    data,
    callback,
    callbackError,
  }
}

export function debtMoneyFailure(data, callbackError) {
  return {
    type: types.DEBT_MONEY_FAILURE,
    data,
    callbackError,
  }
}
