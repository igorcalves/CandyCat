import { all, call } from 'redux-saga/effects'
import { rootLogin, rootLogout } from './user/sagas'
import {
  rootGetTasks,
  rootAddTask,
  rootDeleteTask,
  rootUpdateTaskName,
  rootUpdateTaskToCompleted,
} from './tasks/sagas'

import {
  rootAddMoney,
  rootGetMoney,
  rootDeleteMoney,
  rootGetTotal,
  rootAddToWishList,
  rootGetWishList,
} from './money/sagas'
export default function* rootSaga() {
  yield all({
    login: rootLogin(),
    logout: rootLogout(),
    getTasks: rootGetTasks(),
    addTask: rootAddTask(),
    deleteTask: rootDeleteTask(),
    updateTaskName: rootUpdateTaskName(),
    updateTaskToCompleted: rootUpdateTaskToCompleted(),
    addMoney: rootAddMoney(),
    getMoney: rootGetMoney(),
    deleteMoney: rootDeleteMoney(),
    getTotal: rootGetTotal(),
    addToWishList: rootAddToWishList(),
    getWishList: rootGetWishList(),
  })
}
