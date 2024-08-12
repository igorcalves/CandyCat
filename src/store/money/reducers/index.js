import * as types from '../types'

const initMoneyState = {
  savedMoneyList: [],
  loading: false,
}

const initTotalState = {
  total: {
    userId: 1,
    savedMoney: 0,
    spentMoney: 0,
    wishList: 0,
  },
  loading: false,
}

const initWishListState = {
  wishList: [],
  loading: false,
}

export function money(state = initMoneyState, action) {
  switch (action.type) {
    case types.ADD_MONEY_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.ADD_MONEY_SUCCESS:
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
    case types.UPDATE_MONEY_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.UPDATE_MONEY_SUCCESS:
      return {
        ...state,
        savedMoneyList: state.savedMoneyList.map((money) => {
          if (money.id === action.data.id) {
            return {
              ...money,
              title: action.data.title,
              description: `alterado por ${action.data.email}`,
              date: new Date(),
            }
          }
          return money
        }),
        loading: false,
      }
    case types.UPDATE_MONEY_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case types.DELETE_MONEY_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.DELETE_MONEY_SUCCESS:
      return {
        ...state,
        savedMoneyList: state.savedMoneyList.filter(
          (money) => money.id !== action.data
        ),
        loading: false,
      }
    case types.DELETE_MONEY_FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export function total(state = initTotalState, action) {
  switch (action.type) {
    case types.GET_TOTAL_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case types.GET_TOTAL_SUCCESS:
      return {
        ...state,
        total: action.data,
        loading: false,
      }

    case types.GET_TOTAL_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case types.DEPOSIT_MONEY_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.DEPOSIT_MONEY_SUCCESS:
      return {
        ...state,
        total: {
          ...state.total,
          savedMoney: state.total.savedMoney + Number(action.data.value),
        },
        loading: false,
      }
    case types.DEPOSIT_MONEY_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case types.DEBT_MONEY_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.DEBT_MONEY_SUCCESS:
      return {
        ...state,
        total: {
          ...state.total,
          savedMoney: state.total.savedMoney - Number(action.data.value),
        },
        loading: false,
      }
    case types.DEBT_MONEY_FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export function wishList(state = initWishListState, action) {
  switch (action.type) {
    case types.ADD_TO_WISHLIST_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case types.ADD_TO_WISHLIST_SUCCESS:
      return {
        ...state,
        wishList: [action.data, ...state.wishList],
        loading: false,
      }

    case types.ADD_TO_WISHLIST_FAILURE:
      return {
        ...state,
        loading: false,
      }

    case types.GET_WISHLIST_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case types.GET_WISHLIST_SUCCESS:
      return {
        ...state,
        wishList: action.data,
        loading: false,
      }

    case types.GET_WISHLIST_FAILURE:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}
