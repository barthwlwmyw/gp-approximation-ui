import React from 'react'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import { Card, Container } from '@material-ui/core'
import ParamsPanel from './components/ParamsPanel'
import PlotPanel from './components/PlotPanel'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: 'none'
  }
}))

function App () {
  // eslint-disable-next-line
  const classes = useStyles();

  return (
    <div className='App'>
      <Container>
        <ParamsPanel />
        <PlotPanel />
        <Card className={classes.card}>
          GA Panel
        </Card>
      </Container>
    </div>
  )
}

export default App
