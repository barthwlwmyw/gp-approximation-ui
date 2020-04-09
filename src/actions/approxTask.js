export const CREATE_APPROX_TASK = 'CREATE_APPROX_TASK'
export const createApproxTask = () => ({
  type: CREATE_APPROX_TASK
})

export const CREATE_APPROX_TASK_SUCCESS = 'CREATE_APPROX_TASK_SUCCESS'
export const createApproxTaskSuccess = (res) => ({
  type: CREATE_APPROX_TASK_SUCCESS,
  response: res
})

export const CREATE_APPROX_TASK_FAILURE = 'CREATE_APPROX_TASK_FAILURE'
export const createApproxTaskFailure = (err) => ({
  type: CREATE_APPROX_TASK_FAILURE,
  error: err
})

export const CHECK_TASK_STATUS = 'CHECK_TASK_STATUS'
export const checkTaskStatus = () => ({
  type: CHECK_TASK_STATUS
})

export const CHECK_TASK_STATUS_SUCCESS = 'CHECK_TASK_STATUS_SUCCESS'
export const checkTaskStatusSuccess = (res) => ({
  type: CHECK_TASK_STATUS_SUCCESS,
  response: res
})

export const CHECK_TASK_STATUS_FAILURE = 'CHECK_TASK_STATUS_FAILURE'
export const checkTaskStatusFailure = (err) => ({
  type: CHECK_TASK_STATUS_FAILURE,
  error: err
})
