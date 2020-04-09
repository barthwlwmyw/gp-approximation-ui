import { ActionsObservable, ofType } from 'redux-observable'
import { withLatestFrom, mergeMap, map, catchError } from 'rxjs/operators'

import {
  CREATE_APPROX_TASK_SUCCESS,
  checkTaskStatusSuccess,
  checkTaskStatusFailure
} from '../../actions'

const checkTaskStatusEpic = (action$, state$, { ajax }) =>
  action$.pipe(
    ofType(CREATE_APPROX_TASK_SUCCESS),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      return ajax(reqData).pipe(
        map(res => checkTaskStatusSuccess(res.response)),
        catchError(err => ActionsObservable.of(checkTaskStatusFailure(err)))
      )
    })
  )

export default checkTaskStatusEpic

const reqData = {
  url: 'https://localhost:44322/api/approxTask',
  method: 'GET'
  //   headers: {
  //     'Content-Type': 'application/json; charset=UTF-8'
  //   }
}
