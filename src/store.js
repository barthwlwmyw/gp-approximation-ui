import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { ajax } from 'rxjs/ajax'
import epic from './epic'

import { approximationTask } from './reducers/approxTask'
import { notification } from './reducers/notification'
import { visualisation } from './reducers/visualisation'
import { dataSource } from './reducers/dataSource'

const getStore = () => {
  const epicMiddleware = createEpicMiddleware({ dependencies: { ajax } })

  const middlewares = [epicMiddleware]

  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose

  const enhancer = composeEnhancers(applyMiddleware(...middlewares))

  const rootReducer = combineReducers({
    approximationTask,
    dataSource,
    visualisation,
    notification
  })

  const initialState = {}

  const store = createStore(rootReducer, initialState, enhancer)

  epicMiddleware.run(epic)

  return store
}

export default getStore
