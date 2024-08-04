import app from '../../../data/services/firebaseApp'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../types'
import { sortByDate } from '../../../utils/date/convert'
import {
  getTasksSuccess,
  getTasksFailure,
  getTasksRequest,
  createTaskSuccess,
  createTasksFailure,
  deleteTaskSuccess,
  deleteTaskFailure,
  updateTaskNameSuccess,
  updateTaskNameFailure,
  updateTaskToCompletedSuccess,
  updateTaskToCompletedFailure,
} from '../actions'

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

const db = getFirestore(app)
const getData = async (completedStatus = false) => {
  try {
    const db = getFirestore()
    const tasksCollection = collection(db, 'tasks')
    const q = query(tasksCollection, where('completed', '==', completedStatus))
    const tasksSnapshot = await getDocs(q)
    const tasksList = tasksSnapshot.docs.map((doc) => {
      const task = doc.data()
      task.date = task.date.toDate()
      return task
    })
    return sortByDate(tasksList)
  } catch (error) {
    console.error('Error fetching tasks: ', error)
    return false
  }
}

const addTask = async (data) => {
  const timestamp = Math.floor(Date.now() / 1000)
  const newTask = {
    id: timestamp,
    title: data.title,
    date: new Date(),
    completed: false,
    description: `Criado por ${data.email}`,
  }

  try {
    const tasksCollection = collection(db, 'tasks')
    const taskRef = doc(tasksCollection, String(newTask.id))
    await setDoc(taskRef, newTask)
    return newTask
  } catch (e) {
    return false
  }
}
const deleteTask = async (data) => {
  try {
    const taskRef = doc(db, 'tasks', String(data))
    await deleteDoc(taskRef)
    return true
  } catch (error) {
    return false
  }
}

const updateTaskToCompleted = async (data) => {
  try {
    const taskRef = doc(db, 'tasks', String(data.id))

    await updateDoc(taskRef, {
      completed: true,
      date: new Date(),
      description: `Concluído por ${data.email}`,
    })

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const updateTaskName = async (data) => {
  try {
    const taskRef = doc(db, 'tasks', String(data.id))

    await updateDoc(taskRef, {
      title: data.title,
    })
    return true
  } catch (error) {
    return false
  }
}

function* getTasksSaga({ data, callbackError }) {
  const response = yield call(getData, data, callbackError)
  if (response) {
    yield put(getTasksSuccess(response))
  } else {
    yield put(getTasksFailure())
    callbackError && callbackError('Verifique conexão')
  }
}

function* addTaskSaga({ data, callback, callbackError }) {
  const response = yield call(addTask, data, callback, callbackError)
  if (response) {
    yield put(createTaskSuccess(response))
    callback && callback('Tarefa')
  } else {
    yield put(createTasksFailure())
    callbackError && callbackError('Verifique conexão')
  }
}

function* deleteTaskSaga({ data, callback, callbackError }) {
  const response = yield call(deleteTask, data, callback, callbackError)
  if (response) {
    yield put(deleteTaskSuccess(data))
    callback && callback('Tarefa')
  } else {
    yield put(deleteTaskFailure())
    callbackError && callbackError('Verifique conexão')
  }
}

function* updateTaskNameSaga({ data, callback, callbackError }) {
  const response = yield call(updateTaskName, data, callback, callbackError)
  if (response) {
    yield put(
      updateTaskNameSuccess((data = { id: data.id, title: data.title }))
    )
    callback && callback('Tarefa')
  } else {
    yield put(updateTaskNameFailure())
    callbackError && callbackError('Verifique conexão')
  }
}

function* updateTaskToCompletedSaga({ data, callback, callbackError }) {
  const response = yield call(
    updateTaskToCompleted,
    data,
    callback,
    callbackError
  )
  if (response) {
    yield put(updateTaskToCompletedSuccess(data))
    callback && callback('Tarefa')
  } else {
    yield put(updateTaskToCompletedFailure())
    callbackError && callbackError('Verifique conexão')
  }
}

export function* rootGetTasks() {
  yield takeLatest(types.GET_TASKS_REQUEST, getTasksSaga)
}

export function* rootAddTask() {
  yield takeLatest(types.ADD_TASK_REQUEST, addTaskSaga)
}

export function* rootDeleteTask() {
  yield takeLatest(types.DELETE_TASK_REQUEST, deleteTaskSaga)
}

export function* rootUpdateTaskName() {
  yield takeLatest(types.UPDATE_TASK_NAME_REQUEST, updateTaskNameSaga)
}

export function* rootUpdateTaskToCompleted() {
  yield takeLatest(
    types.UPDATE_TASK_TO_COMPLETED_REQUEST,
    updateTaskToCompletedSaga
  )
}
