export const REQUEST_SESSION_GUID = 'REQUEST_SESSION_GUID'
export const requestSessionGuid = () => ({
  type: REQUEST_SESSION_GUID
})

export const REQUEST_SESSION_GUID_SUCCESS = 'REQUEST_SESSION_GUID_SUCCESS'
export const requestSessionGuidSuccess = (res) => ({
  type: REQUEST_SESSION_GUID_SUCCESS,
  response: res
})

export const REQUEST_SESSION_GUID_FAILURE = 'REQUEST_SESSION_GUID_FAILURE'
export const requestSessionGuidFailure = (err) => ({
  type: REQUEST_SESSION_GUID_FAILURE,
  error: err
})
