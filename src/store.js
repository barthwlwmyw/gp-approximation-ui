import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import session from './reducers/session'
import { ajax } from 'rxjs/ajax'
import epic from './epic'

// import { createStore } from 'redux'
// import session from './reducers/session'

const getStore = () => {
  const epicMiddleware = createEpicMiddleware({ dependencies: { ajax } })

  const middlewares = [epicMiddleware]

  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose

  const enhancer = composeEnhancers(applyMiddleware(...middlewares))

  const store = createStore(session, {}, enhancer)

  epicMiddleware.run(epic)

  return store
}

// const getStore2 = () => createStore(session, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// export default getStore2

export default getStore
