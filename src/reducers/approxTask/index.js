import { CREATE_APPROX_TASK_SUCCESS, CHECK_TASK_STATUS_SUCCESS } from '../../actions'

export const createTaskReducer = (state = { approxTaskGuid: null }, action) => {
  switch (action.type) {
    case CREATE_APPROX_TASK_SUCCESS:
      return {
        approxTaskGuid: action.response.taskGuid
      }
    default:
      return state
  }
}

export const checkTaskStatusReducer = (state = { taskProgress: 0 }, action) => {
  switch (action.type) {
    case CHECK_TASK_STATUS_SUCCESS:
      return {
        taskProgress: action.response.progress,
        isDone: action.response.isDone
      }
    case CREATE_APPROX_TASK_SUCCESS:
      return {
        taskProgress: action.response.progress
      }
    default:
      return state
  }
}
