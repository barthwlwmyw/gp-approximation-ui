import { ActionsObservable, ofType } from 'redux-observable'
import { withLatestFrom, mergeMap, map, catchError } from 'rxjs/operators'

import {
  CREATE_APPROX_TASK,
  createApproxTaskSuccess,
  createApproxTaskFailure
} from '../../actions'

import { createTaskRequest } from '../../api'

const createApproxTaskEpic = (action$, state$, { ajax }) =>
  action$.pipe(
    ofType(CREATE_APPROX_TASK),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      return ajax(createTaskRequest(action.algorithmParams, action.dataFile)).pipe(
        map(res => createApproxTaskSuccess(res.response)),
        catchError(err => ActionsObservable.of(createApproxTaskFailure(err)))
      )
    })
  )

export default createApproxTaskEpic
