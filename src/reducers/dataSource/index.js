import { PARSE_DATAFILE_SUCCESS } from '../../actions'

export const dataSource = (state = dataSourceDefault(), action) => {
  switch (action.type) {
    case PARSE_DATAFILE_SUCCESS:
      return {
        ...state,
        fileContent: action.fileContent
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
