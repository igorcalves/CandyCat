import * as types from '../types'

import { call, put, takeLatest } from 'redux-saga/effects'
// import * as services from '../../../data/services/moneyService'
import * as services from '../../../data/db/fakeService'
import * as wishListService from '../../../data/services/wishListService'
import * as actions from '../actions'

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
    yield put(actions.getSavedMoneySuccess(response))
  } else {
    yield put(actions.getSavedMoneyFailure(response))
  }
}

export function* deleteMoneySaga(action) {
  const { data } = action
  const response = yield call(services.deleteMoney, data)
  if (response) {
    yield put(actions.deleteMoneySuccess(data.id))
    yield put(actions.debtMoneySuccess({ id: data.id, value: data.title }))
  } else {
    yield put(actions.deleteMoneyFailure(response))
    yield put(actions.debtMoneySuccess())
  }
}

export function* getTotalSaga(action) {
  const { data } = action
  const response = yield call(services.getTotal, data)
  if (response) {
    yield put(actions.getTotalSuccess(response))
  } else {
    yield put(actions.getTotalFailure(response))
  }
}

export function* AddToWishListSaga(action) {
  const { data } = action
  const response = yield call(wishListService.addToWishList, data)
  if (response) {
    yield put(actions.addToWishlistSuccess(response))
  } else {
    yield put(actions.addToWishlistFailure(response))
  }
}

export function* getWishListSaga() {
  const response = yield call(wishListService.getData)
  if (response) {
    yield put(actions.getWishlistSuccess(response))
  } else {
    yield put(actions.getWishlistFailure(response))
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

export function* rootAddToWishList() {
  yield takeLatest(types.ADD_TO_WISHLIST_REQUEST, AddToWishListSaga)
}

export function* rootGetWishList() {
  yield takeLatest(types.GET_WISHLIST_REQUEST, getWishListSaga)
}
