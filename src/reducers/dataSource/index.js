import { PARSE_DATAFILE_SUCCESS, PARSE_DATAFILE_FAILURE, RESET_PARAMS } from '../../actions'

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
    case RESET_PARAMS:
      return dataSourceDefault()
    default:
      return state
  }
}

const dataSourceDefault = () => {
  return {
    fileContent: null
  }
}
