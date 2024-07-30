import * as types from '../types';

export function createTaskRequest(data, callback, callbackError) {
    return {
        type: types.ADD_TASK_REQUEST,
        data,
        callback,
        callbackError
    };
    }

export function createTaskSuccess(data, callback, callbackError) {
    return {
        type: types.ADD_TASK_SUCCESS,
        data,
        callback,
        callbackError
    };
}

export function createTaskFailure(data, callbackError) {
    return {
        type: types.ADD_TASK_FAILURE,
        data,
        callbackError
    };
}

export function getTasksRequest(data, callback, callbackError) {
    return {
        type: types.GET_TASKS_REQUEST,
        data,
        callback,
        callbackError
    };
}

export function getTasksSuccess(data, callback, callbackError) {
    return {
        type: types.GET_TASKS_SUCCESS,
        data,
        callback,
        callbackError
    };
}

export function getTasksFailure(data, callbackError) {
    return {
        type: types.GET_TASKS_FAILURE,
        data,
        callbackError
    };
}

export function updateTaskRequest(data, callback, callbackError) {
    return {
        type: types.UPDATE_TASK_NAME_REQUEST,
        data,
        callback,
        callbackError
    };
}

export function updateTaskSuccess(data, callback, callbackError) {
    return {
        type: types.UPDATE_TASK_NAME_SUCCESS,
        data,
        callback,
        callbackError
    };
}

export function updateTaskFailure(data, callbackError) {
    return {
        type: types.UPDATE_TASK_NAME_FAILURE,
        data,
        callbackError
    };
}

export function deleteTaskRequest(data, callback, callbackError) {
    return {
        type: types.DELETE_TASK_REQUEST,
        data,
        callback,
        callbackError
    };
}

export function deleteTaskSuccess(data, callback, callbackError) {
    return {
        type: types.DELETE_TASK_SUCCESS,
        data,
        callback,
        callbackError
    };
}


export function deleteTaskFailure(data, callbackError) {
    return {
        type: types.DELETE_TASK_FAILURE,
        data,
        callbackError
    };
}


export function updateTaskToCompletedRequest(data, callback, callbackError) {
    return {
        type: types.UPDATE_TASK_TO_COMPLETED_REQUEST,
        data,
        callback,
        callbackError
    };
}


export function updateTaskToCompletedSuccess(data, callback, callbackError) {
    return {
        type: types.UPDATE_TASK_TO_COMPLETED_SUCCESS,
        data,
        callback,
        callbackError
    };
}


export function updateTaskToCompletedFailure(data, callbackError) {
    return {
        type: types.UPDATE_TASK_TO_COMPLETED_FAILURE,
        data,
        callbackError
    };
}



