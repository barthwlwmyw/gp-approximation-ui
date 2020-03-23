import { REQUEST_SESSION_GUID } from '../../actions'

export default (state = { sessionFetching: false }, action) => {
  switch (action.type) {
    case REQUEST_SESSION_GUID:
      return { sessionFetching: true }

    default:
      return state
  }
}
