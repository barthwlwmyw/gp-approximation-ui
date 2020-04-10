import { ActionsObservable, ofType } from 'redux-observable'
import { withLatestFrom, mergeMap, map, catchError, delay, filter } from 'rxjs/operators'

import {
  CREATE_APPROX_TASK_SUCCESS,
  CHECK_TASK_STATUS_SUCCESS,
  checkTaskStatusSuccess,
  checkTaskStatusFailure
} from '../../actions'

const checkTaskStatusEpic = (action$, state$, { ajax }) =>
  action$.pipe(
    ofType(CREATE_APPROX_TASK_SUCCESS, CHECK_TASK_STATUS_SUCCESS),
    delay(1000),
    withLatestFrom(state$),
    filter(([_, state]) => state.checkTaskStatusReducer.isDone !== true),
    mergeMap(([action, state]) => {
      return ajax(reqData(state.createTaskReducer.approxTaskGuid)).pipe(
        map(res => checkTaskStatusSuccess(res.response)),
        catchError(err => ActionsObservable.of(checkTaskStatusFailure(err)))
      )
    })
  )

export default checkTaskStatusEpic

const reqData = (taskGuid) => {
  return {
    url: `https://localhost:44322/api/approxTask/${taskGuid}`,
    method: 'GET'
  //   headers: {
  //     'Content-Type': 'application/json; charset=UTF-8'
  //   }
  }
}
