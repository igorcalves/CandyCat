import * as types from '../types'

const initialState = {
  tasks: [],
  loading: false,
}

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case types.GET_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.data,
        loading: false,
      }
    case types.GET_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case types.ADD_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [action.data, ...state.tasks],
        loading: false,
      }
    case types.ADD_TASK_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case types.DELETE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.DELETE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.data),
        loading: false,
      }
    case types.DELETE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case types.UPDATE_TASK_NAME_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.UPDATE_TASK_NAME_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.data.id) {
            return {
              ...task,
              title: action.data.title,
            }
          }
          return task
        }),
        loading: false,
      }
    case types.UPDATE_TASK_NAME_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case types.UPDATE_TASK_TO_COMPLETED_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.UPDATE_TASK_TO_COMPLETED_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.data.id) {
            return {
              ...task,
              completed: true,
              date: new Date(),
              description: `Concluído por ${action.data.email}`,
            }
          }
          return task
        }),
        loading: false,
      }
    case types.UPDATE_TASK_TO_COMPLETED_FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
