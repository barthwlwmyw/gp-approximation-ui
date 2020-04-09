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
