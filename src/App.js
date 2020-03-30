import React from 'react'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import { Card, Container } from '@material-ui/core'
import ParamsPanel from './components/ParamsPanel'

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
        <Card className={classes.card}>
          PlotPanel
        </Card>
        <Card className={classes.card}>
          GA Panel
        </Card>
      </Container>
    </div>
  )
}

export default App
