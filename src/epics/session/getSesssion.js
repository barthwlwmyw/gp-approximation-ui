import { ActionsObservable, ofType } from 'redux-observable'
import { withLatestFrom, mergeMap, map, catchError } from 'rxjs/operators'

import {
  REQUEST_SESSION_GUID,
  requestSessionGuidSuccess,
  requestSessionGuidFailure
} from '../../actions'

const getSessionGuidEpic = (action$, state$, { ajax }) =>
  action$.pipe(
    ofType(REQUEST_SESSION_GUID),
    withLatestFrom(state$),
    mergeMap(([_, state]) => {
      return ajax(reqData).pipe(
        map(({ response }) => requestSessionGuidSuccess(response)),
        catchError(err => ActionsObservable.of(requestSessionGuidFailure(err)))
      )
    }
    )
  )

export default getSessionGuidEpic

const reqData = {
  url: 'https://localhost:44322/api/session',
  method: 'GET'
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8'
//   }
}
