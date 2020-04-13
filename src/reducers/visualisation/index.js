import { PARSE_DATAFILE_SUCCESS } from '../../actions'
import * as R from 'ramda'

export const visualisation = (state = visualisationDefault(), action) => {
  switch (action.type) {
    case PARSE_DATAFILE_SUCCESS:
      return {
        dataSourcePlot: toPlotlyFriendlyDataset(action.file)
      }
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

  //   R.append(1, xvals)
  //   R.append(1, yvals)

  return { x: xvals, y: yvals }
}
