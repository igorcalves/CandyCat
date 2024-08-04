import { isLoading } from 'expo-font'
import * as types from '../types'

const initialState = {
  savedMoneyList: [],
  loading: false,
}

export default money = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MONEY_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.ADD_MONEY_SUCCESS:
      console.log('action.data', action.data)
      return {
        ...state,
        savedMoneyList: [action.data, ...state.savedMoneyList],
        loading: false,
      }

    case types.ADD_MONEY_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case types.GET_SAVED_MONEY_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case types.GET_SAVED_MONEY_SUCCESS:
      return {
        ...state,
        savedMoneyList: action.data,
        loading: false,
      }

    case types.GET_SAVED_MONEY_FAILURE:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}
