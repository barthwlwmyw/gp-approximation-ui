import { PARSE_DATAFILE_SUCCESS, PARSE_DATAFILE_FAILURE, RESET_PARAMS } from '../../actions'
import * as R from 'ramda'

export const visualisation = (state = visualisationDefault(), action) => {
  switch (action.type) {
    case PARSE_DATAFILE_SUCCESS:
      return {
        dataSourcePlot: toPlotlyFriendlyDataset(action.fileContent)
      }
    case PARSE_DATAFILE_FAILURE:
      return {
        ...visualisationDefault()
      }
    case RESET_PARAMS:
      return visualisationDefault()
    default:
      return state
  }
}

const visualisationDefault = () => {
  return {
    dataSourcePlot: null
  }
}

const toPlotlyFriendlyDataset = (file) => {
  let xvals = []
  let yvals = []

  file.split('\r\n').forEach(line => {
    const values = line.split(' ')
    xvals = R.append(values[0], xvals)
    yvals = R.append(values[1], yvals)
  })

  return { x: xvals, y: yvals }
}
