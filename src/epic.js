import { combineEpics } from 'redux-observable'

import getSessionGuidEpic from './epics/session/getSesssion'
import loadDatafileEpic from './epics/datafile/loadDatafile'
import createApproxTaskEpic from './epics/approxTask/createTask'

export default combineEpics(
  getSessionGuidEpic,
  loadDatafileEpic,
  createApproxTaskEpic)
