import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Grid } from '@material-ui/core'
import ParamsPanel from './components/ParamsPanel'
import VisualisationPanel from './components/VisualisationPanel'
import useStyles from './atoms'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import * as R from 'ramda'

import { closeSnackbar } from './actions'

function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

function App () {
  const classes = useStyles()
  const dispatch = useDispatch()

  const notification = useSelector(R.path(['notification']))

  return (
    <div className='App'>

      <Grid
        className={classes.defaultPadding}
        container
      >
        <Grid
          item
          xs={3}
          className={classes.gridItem}
        >
          <ParamsPanel />
        </Grid>
        <Grid
          item
          xs={9}
          className={classes.gridItem}
        >
          <VisualisationPanel />
        </Grid>
      </Grid>

      <Snackbar
        open={notification.isOpen}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        autoHideDuration={6000}
        onClose={() => dispatch(closeSnackbar())}
      >
        <Alert
          onClose={() => dispatch(closeSnackbar())}
          severity={notification.type}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default App
