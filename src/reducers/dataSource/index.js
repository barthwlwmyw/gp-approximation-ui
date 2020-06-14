import { PARSE_DATAFILE_SUCCESS, PARSE_DATAFILE_FAILURE } from '../../actions'

export const dataSource = (state = dataSourceDefault(), action) => {
  switch (action.type) {
    case PARSE_DATAFILE_SUCCESS:
      return {
        ...state,
        fileContent: action.fileContent
      }
    case PARSE_DATAFILE_FAILURE:
      return {
        ...dataSourceDefault()
      }
    default:
      return state
  }
}

const dataSourceDefault = () => {
  return {
    fileContent: null
  }
}
