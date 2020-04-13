import { CLOSE_SNACKBAR, CREATE_APPROX_TASK_FAILURE, CHECK_TASK_STATUS_FAILURE } from '../../actions'

export const notification = (state = notificationDefault(), action) => {
  switch (action.type) {
    case CLOSE_SNACKBAR:
      return {
        ...notificationDefault()
      }
    case CREATE_APPROX_TASK_FAILURE:
      return {
        isOpen: true,
        type: 'error',
        message: 'Failed to run approximation task'
      }
    case CHECK_TASK_STATUS_FAILURE:
      return {
        isOpen: true,
        type: 'error',
        message: 'Failed to check approximation status'
      }
    default:
      return state
  }
}

const notificationDefault = () => {
  return {
    isOpen: false,
    type: 'info',
    message: ''
  }
}
