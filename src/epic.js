import { combineEpics } from 'redux-observable'

import loadDatafileEpic from './epics/datafile/loadDatafile'
import createApproxTaskEpic from './epics/approxTask/createTask'
import checkTaskStatusEpic from './epics/approxTask/checkTaskStatus'

export default combineEpics(
  loadDatafileEpic,
  createApproxTaskEpic,
  checkTaskStatusEpic)
