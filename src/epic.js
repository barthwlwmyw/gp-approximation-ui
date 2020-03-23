import { combineEpics } from 'redux-observable'

import getSessionGuidEpic from './epics/session/getSesssion'

export default combineEpics(getSessionGuidEpic)
