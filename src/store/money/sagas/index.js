import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  setDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore'

import { sortByDate } from '../../../utils/date/convert'

import * as types from '../types'

import { call, put, takeLatest } from 'redux-saga/effects'

import {
  addMoneySuccess,
  addMoneyFailure,
  getSavedMoneySuccess,
  getSavedMoneyFailure,
  updateMoneySuccess,
  updateMoneyFailure,
} from '../actions'

import app from '../../../data/services/firebaseApp'
const db = getFirestore(app)

const addMoney = async (data) => {
  const timestamp = Math.floor(Date.now() / 1000)
  const newMoneySaved = {
    id: timestamp,
    title: data.title,
    date: new Date(),
    description: `Criado por ${data.email}`,
  }

  try {
    const MoneyCollection = collection(db, 'money')
    const moneyRef = doc(MoneyCollection, String(newMoneySaved.id))
    await setDoc(moneyRef, newMoneySaved)
    return newMoneySaved
  } catch (e) {
    return false
  }
}

const getData = async () => {
  try {
    const db = getFirestore()
    const moneyCollection = collection(db, 'money')
    const moneySnapshot = await getDocs(moneyCollection)
    const moneySavedList = moneySnapshot.docs.map((doc) => {
      const moneySaved = doc.data()
      moneySaved.date = moneySaved.date.toDate()
      return moneySaved
    })
    return sortByDate(moneySavedList)
  } catch (error) {
    console.error('Error fetching money: ', error)
    return false
  }
}

const updateMoney = async (data) => {
  try {
    const moneyRef = doc(db, 'money', String(data.id))

    await updateDoc(moneyRef, {
      title: data.title,
      description: `Alterado por ${data.email}`,
      date: new Date(),
    })
    return true
  } catch (error) {
    return false
  }
}

function* addMoneySaga(action) {
  const { data } = action
  const response = yield call(addMoney, data)
  if (response) {
    yield put(addMoneySuccess(response))
  } else {
    yield put(addMoneyFailure())
  }
}

export function* getMoneySaga() {
  const response = yield call(getData)
  if (response) {
    yield put(getSavedMoneySuccess(response))
  } else {
    yield put(getSavedMoneyFailure(response))
  }
}

export function* updateMoneySaga(action) {
  const { data } = action
  const response = yield call(updateMoney, data)
  if (response) {
    yield put(updateMoneySuccess(data))
  } else {
    yield put(updateMoneyFailure(response))
  }
}

export function* rootAddMoney() {
  yield takeLatest(types.ADD_MONEY_REQUEST, addMoneySaga)
}

export function* rootGetMoney() {
  yield takeLatest(types.GET_SAVED_MONEY_REQUEST, getMoneySaga)
}

export function* rootUpdateMoney() {
  yield takeLatest(types.UPDATE_MONEY_REQUEST, updateMoneySaga)
}
