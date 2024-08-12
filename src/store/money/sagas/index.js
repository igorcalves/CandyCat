import * as types from '../types'

import { call, put, takeLatest } from 'redux-saga/effects'
import * as services from '../../../data/services/moneyService'

import {
  addMoneySuccess,
  addMoneyFailure,
  getSavedMoneySuccess,
  getSavedMoneyFailure,
  deleteMoneySuccess,
  deleteMoneyFailure,
  getTotalSuccess,
  getTotalFailure,
  depositMoneySuccess,
  depositMoneyFailure,
  debtMoneySuccess,
} from '../actions'

function* addMoneySaga(action) {
  const { data } = action
  const response = yield call(services.addMoney, data)
  if (response) {
    yield put(addMoneySuccess(response))
    yield put(
      depositMoneySuccess({
        id: 1,
        value: response.title,
      })
    )
  } else {
    yield put(addMoneyFailure())
    yield put(depositMoneyFailure())
  }
}

export function* getMoneySaga() {
  const response = yield call(services.getData)
  if (response) {
    yield put(getSavedMoneySuccess(response))
  } else {
    yield put(getSavedMoneyFailure(response))
  }
}

export function* deleteMoneySaga(action) {
  const { data } = action
  const response = yield call(services.deleteMoney, data)
  if (response) {
    yield put(deleteMoneySuccess(data.id))
    yield put(debtMoneySuccess({ id: data.id, value: data.title }))
  } else {
    yield put(deleteMoneyFailure(response))
    yield put(debtMoneySuccess())
  }
}

export function* getTotalSaga(action) {
  const { data } = action
  const response = yield call(services.getTotal, data)
  if (response) {
    yield put(getTotalSuccess(response))
  } else {
    yield put(getTotalFailure(response))
  }
}

export function* rootAddMoney() {
  yield takeLatest(types.ADD_MONEY_REQUEST, addMoneySaga)
}

export function* rootGetMoney() {
  yield takeLatest(types.GET_SAVED_MONEY_REQUEST, getMoneySaga)
}

export function* rootDeleteMoney() {
  yield takeLatest(types.DELETE_MONEY_REQUEST, deleteMoneySaga)
}

export function* rootGetTotal() {
  yield takeLatest(types.GET_TOTAL_REQUEST, getTotalSaga)
}
