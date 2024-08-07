import { call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../types'
import * as services from '../../../data/services/tasksService'
import {
  getTasksSuccess,
  getTasksFailure,
  createTaskSuccess,
  createTasksFailure,
  deleteTaskSuccess,
  deleteTaskFailure,
  updateTaskNameSuccess,
  updateTaskNameFailure,
  updateTaskToCompletedSuccess,
  updateTaskToCompletedFailure,
} from '../actions'

function* getTasksSaga({ data, callbackError }) {
  const response = yield call(services.getData, data, callbackError)
  if (response) {
    yield put(getTasksSuccess(response))
  } else {
    yield put(getTasksFailure())
    callbackError && callbackError('Verifique conexão')
  }
}

function* addTaskSaga({ data, callback, callbackError }) {
  const response = yield call(services.addTask, data, callback, callbackError)
  if (response) {
    yield put(createTaskSuccess(response))
    callback && callback('Tarefa')
  } else {
    yield put(createTasksFailure())
    callbackError && callbackError('Verifique conexão')
  }
}

function* deleteTaskSaga({ data, callback, callbackError }) {
  const response = yield call(
    services.deleteTask,
    data,
    callback,
    callbackError
  )
  if (response) {
    yield put(deleteTaskSuccess(data))
    callback && callback('Tarefa')
  } else {
    yield put(deleteTaskFailure())
    callbackError && callbackError('Verifique conexão')
  }
}

function* updateTaskNameSaga({ data, callback, callbackError }) {
  const response = yield call(
    services.updateTaskName,
    data,
    callback,
    callbackError
  )
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
    services.updateTaskToCompleted,
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
