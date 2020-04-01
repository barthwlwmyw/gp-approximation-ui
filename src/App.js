import React from 'react'
import './App.css'
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core'
import ParamsPanel from './components/ParamsPanel'
import VisualisationPanel from './components/VisualisationPanel'
import useStyles from './atoms'

function App () {
  const classes = useStyles()

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
    </div>
  )
}

export default App
