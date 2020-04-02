import { combineEpics } from 'redux-observable'

import getSessionGuidEpic from './epics/session/getSesssion'
import loadDatafileEpic from './epics/datafile/loadDatafile'

export default combineEpics(getSessionGuidEpic, loadDatafileEpic)
