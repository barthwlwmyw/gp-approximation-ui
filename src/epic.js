import { combineEpics } from 'redux-observable'

import getSessionGuidEpic from './epics/session/getSesssion'
import loadDatafileEpic from './epics/datafile/loadDatafile'
import createApproxTaskEpic from './epics/approxTask/createTask'
import checkTaskStatusEpic from './epics/approxTask/checkTaskStatus'

export default combineEpics(
  getSessionGuidEpic,
  loadDatafileEpic,
  createApproxTaskEpic,
  checkTaskStatusEpic)
