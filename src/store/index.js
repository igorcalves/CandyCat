import { combineReducers } from 'redux'
import loginReducer from './user/reducers'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import tasksReducer from './tasks/reducers'
import moneyRecuder from './money/reducers'
const rootReducer = combineReducers({
  login: loginReducer,
  tasks: tasksReducer,
  money: moneyRecuder,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
