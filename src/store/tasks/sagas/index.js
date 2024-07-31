import app from '../../../data/services/firebaseApp';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../types'

import { getTasksSuccess, getTasksFailure, getTasksRequest } from '../actions';

import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc,
    updateDoc,
    setDoc,
    deleteDoc
} from "firebase/firestore";

const db = getFirestore(app);
const getData = async (callbackError) => {
    try {
        const tasksCollection = collection(db, "tasks");
        const tasksSnapshot = await getDocs(tasksCollection);
        const tasksList = tasksSnapshot.docs.map(doc => doc.data());
        return tasksList;
        
    } catch (error) {
        console.error("Error getting documents: ", error);
        callbackError && callbackError();
        
    }
    
};




function* getTasksSaga({ callback, callbackError }) {
    const response = yield call(getData, callbackError);
    if (response) {
        yield put(getTasksSuccess(response));
        callback && callback();
    } else {
        yield put(getTasksFailure());
        callbackError && callbackError();
    }
}

function* addTaskSaga({ data, callback, callbackError }) {
    const response = yield call(addTask, data, callback, callbackError);
    if (response) {
        yield put(addTaskSuccess(response));
        callback && callback();
    } else {
        yield put(addTaskFailure());
        callbackError && callbackError();

    }
}


function* deleteTaskSaga({ data, callback, callbackError }) {
    const response = yield call(deleteTask, data, callback, callbackError);
    if (response) {
        yield put(deleteTaskSuccess(response));
        callback && callback();
    } else {
        yield put(deleteTaskFailure());
    }
}

function* updateTaskNameSaga({ data, callback, callbackError }) {
    const response = yield call(updateTaskName, data, callback, callbackError);
    if (response) {
        yield put(updateTaskNameSuccess(response));
        callback && callback();
    } else {
        yield put(updateTaskNameFailure());
    }
}

function* updateTaskToCompletedSaga({ data, callback, callbackError }) {
    const response = yield call(updateTaskToCompleted, data, callback, callbackError);
    if (response) {
        yield put(updateTaskToCompletedSuccess(response));
        callback && callback();
    } else {
        yield put(updateTaskToCompletedFailure());
    }
}

export function* rootGetTasks() {
    yield takeLatest(types.GET_TASKS_REQUEST, getTasksSaga);
}

export function* rootAddTask() {
    yield takeLatest(types.ADD_TASK_REQUEST, addTaskSaga);
}

export function* rootDeleteTask() {
    yield takeLatest(types.DELETE_TASK_REQUEST, deleteTaskSaga);
}

export function* rootUpdateTaskName() {
    yield takeLatest(types.UPDATE_TASK_NAME_REQUEST, updateTaskNameSaga);
}

export function* rootUpdateTaskToCompleted() {
    yield takeLatest(types.UPDATE_TASK_TO_COMPLETED_REQUEST, updateTaskToCompletedSaga);
}


