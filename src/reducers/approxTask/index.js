import { CREATE_APPROX_TASK_SUCCESS } from '../../actions'

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
