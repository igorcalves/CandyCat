import {combineReducers} from 'redux';
import loginReducer from './user/reducers';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const rootReducer = combineReducers({
  login: loginReducer
});






const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)

)

sagaMiddleware.run(rootSaga)



export default store