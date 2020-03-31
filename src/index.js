import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import GetStore2 from './store'
ReactDOM.render(
  <>
    <Provider store={GetStore2()}>
      <App />
    </Provider>

    <script crossorigin src='https://cdn.plot.ly/plotly-latest.min.js' />
  </>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
