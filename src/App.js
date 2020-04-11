import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core'
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

  const notificationOpen = useSelector(R.path(['notificationReducer', 'notificationOpen']))

  return (
    <div className='App'>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
              System aproksymujący zbiór wartości funkcją generowaną przez programowanie genetyczne
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid className={classes.defaultPadding} container>
        <Grid item xs={3} className={classes.gridItem}>
          <ParamsPanel />
        </Grid>
        <Grid item xs={9} className={classes.gridItem}>
          <VisualisationPanel />
        </Grid>
      </Grid>

      <Snackbar open={notificationOpen} autoHideDuration={6000} onClose={() => dispatch(closeSnackbar())}>
        <Alert onClose={() => dispatch(closeSnackbar())} severity='error'>
          Connection error!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default App
