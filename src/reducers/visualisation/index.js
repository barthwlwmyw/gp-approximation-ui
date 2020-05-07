import { PARSE_DATAFILE_SUCCESS, PARSE_DATAFILE_FAILURE, RESET_PARAMS, CHECK_TASK_STATUS_SUCCESS } from '../../actions'
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
    case CHECK_TASK_STATUS_SUCCESS:
      return {
        ...state,
        evaluatedValues: action.response.result.evaluatedValues,
        bestFitnessValues: R.map(R.prop(['bestValue']), action.response.result.algorithmRunMetadata),
        averageFitnessValues: R.map(R.prop(['averageValue']), action.response.result.algorithmRunMetadata),
        worstFitnessValues: R.map(R.prop(['worstValue']), action.response.result.algorithmRunMetadata)
      }
    case RESET_PARAMS:
      return visualisationDefault()
    default:
      return state
  }
}

const visualisationDefault = () => {
  return {
    dataSourcePlot: null,
    evaluatedValues: null
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
