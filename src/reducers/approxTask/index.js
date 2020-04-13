import { CREATE_APPROX_TASK_SUCCESS, CHECK_TASK_STATUS_SUCCESS } from '../../actions'

export const approximationTask = (state = approximationTaskDefault(), action) => {
  switch (action.type) {
    case CREATE_APPROX_TASK_SUCCESS:
      return {
        ...state,
        taskGuid: action.response.taskGuid,
        taskProgress: 1
      }
    case CHECK_TASK_STATUS_SUCCESS:
      return {
        ...state,
        taskProgress: action.response.progress,
        isDone: action.response.isDone
      }
    default:
      return state
  }
}

const approximationTaskDefault = () => {
  return {
    taskGuid: null,
    taskProgress: 0,
    isDone: false
  }
}
