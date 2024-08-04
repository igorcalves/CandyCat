import { combineReducers } from 'redux'
import loginReducer from './user/reducers'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import tasksReducer from './tasks/reducers'
import { money as moneyReducer, total as totalReducer } from './money/reducers'
const rootReducer = combineReducers({
  login: loginReducer,
  tasks: tasksReducer,
  money: moneyReducer,
  total: totalReducer,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
