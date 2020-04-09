import { ActionsObservable, ofType } from 'redux-observable'
import { withLatestFrom, mergeMap, map, catchError } from 'rxjs/operators'

import {
  CREATE_APPROX_TASK,
  createApproxTaskSuccess,
  createApproxTaskFailure
} from '../../actions'

const createApproxTaskEpic = (action$, state$, { ajax }) =>
  action$.pipe(
    ofType(CREATE_APPROX_TASK),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      return ajax(reqData).pipe(
        map(res => createApproxTaskSuccess(res)),
        catchError(err => ActionsObservable.of(createApproxTaskFailure(err)))
      )
    })
  )

export default createApproxTaskEpic

const reqData = {
  url: 'https://localhost:44322/api/approxTask',
  method: 'POST'
  //   headers: {
  //     'Content-Type': 'application/json; charset=UTF-8'
  //   }
}
