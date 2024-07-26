import * as types from '../types';

const initialState = {
  user: {
    email: '',
    logged: false
  },
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.data.email
        }
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          logged: true
        }
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        user: {
          ...state.user,
          logged: false
        }
      };
      case types.LOGOUT_SUCCESS:
        return {
          ...state,
          user: initialState.user
        };
    default:
      return state;
  }
}