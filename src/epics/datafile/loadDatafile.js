import { ActionsObservable, ofType } from 'redux-observable'
import { withLatestFrom, mergeMap, map, catchError } from 'rxjs/operators'

import {
  LOAD_DATAFILE,
  parseDatafile,
  parseDatafileSuccess,
  parseDatafileFailure
} from '../../actions'

const loadDatafileEpic = (action$, state$, { ajax }) =>
  action$.pipe(
    ofType(LOAD_DATAFILE),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      return parseDatafile(action.file).pipe(
        map(res => parseDatafileSuccess(res)),
        catchError(err => ActionsObservable.of(parseDatafileFailure(err)))
      )
    })
  )

export default loadDatafileEpic
