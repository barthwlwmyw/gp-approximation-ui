import { CLOSE_SNACKBAR, CREATE_APPROX_TASK_FAILURE, CHECK_TASK_STATUS_FAILURE } from '../../actions'

export const notificationReducer = (state = { notificationOpen: false }, action) => {
  switch (action.type) {
    case CLOSE_SNACKBAR:
      return {
        notificationOpen: false
      }
    case CREATE_APPROX_TASK_FAILURE:
      return {
        notificationOpen: true
      }
    case CHECK_TASK_STATUS_FAILURE:
      return {
        notificationOpen: true
      }
    default:
      return state
  }
}
