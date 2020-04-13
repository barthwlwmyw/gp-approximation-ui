import { CLOSE_SNACKBAR, CREATE_APPROX_TASK_FAILURE, CHECK_TASK_STATUS_FAILURE, PARSE_DATAFILE_FAILURE } from '../../actions'

export const notification = (state = notificationDefault(), action) => {
  switch (action.type) {
    case CLOSE_SNACKBAR:
      return {
        ...state,
        isOpen: false
      }
    case CREATE_APPROX_TASK_FAILURE:
      return {
        isOpen: true,
        type: 'error',
        message: `Unable to run approximation task (${action.error})`
      }
    case CHECK_TASK_STATUS_FAILURE:
      return {
        isOpen: true,
        type: 'error',
        message: `Unable to check approximation status (${action.error})`
      }
    case PARSE_DATAFILE_FAILURE:
      return {
        isOpen: true,
        type: 'error',
        message: 'Unable to parse source file'
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
