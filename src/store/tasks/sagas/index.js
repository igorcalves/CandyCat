import app from '../../../data/services/firebaseApp';

import { useTasks } from '../../../data/hooks/useTasks';
import { getTasksSuccess, getTasksFailure, getTasksRequest } from '../actions';


const {
    addTask,
    deleteTask,
    getData,
    updateTaskName,
    updateTaskToCompleted,
    } = useTasks();



function* getTasksSaga({ callback }) {
    const response = yield call(getData, callback);
    if (response) {
        yield put(getTasksSuccess(response));
        callback && callback();
    } else {
        yield put(getTasksFailure());
    }
}

function* addTaskSaga({ data, callback, callbackError }) {
    const response = yield call(addTask, data, callback, callbackError);
    if (response) {
        yield put(addTaskSuccess(response));
        callback && callback();
    } else {
        yield put(addTaskFailure());
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

export default function* tasksSaga() {
    yield takeLatest(types.GET_TASKS_REQUEST, getTasksSaga);
    yield takeLatest(types.ADD_TASK_REQUEST, addTaskSaga);
    yield takeLatest(types.DELETE_TASK_REQUEST, deleteTaskSaga);
    yield takeLatest(types.UPDATE_TASK_NAME_REQUEST, updateTaskNameSaga);
    yield takeLatest(types.UPDATE_TASK_TO_COMPLETED_REQUEST, updateTaskToCompletedSaga);
}

