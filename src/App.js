import React, { useState } from 'react'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, Container } from '@material-ui/core'
import axios from 'axios'

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

  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Choose File')

  const onChange = e => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
  }

  const testClick = async () => {
    try {
      const res = await axios.get('https://localhost:44322/api/Session')

      window.alert(res)
    } catch (err) {
      window.alert('sukabliat')
    }
  }

  const onSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await axios.post('https://localhost:44322/api/Test', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log(res)
    } catch (err) {
      window.alert(err)
    } finally {
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={onSubmit}>
          <input
            // className={classes.input}
            id='customFile'
            type='file'
            onChange={onChange}
          />
          <label htmlFor='customFile'>
            <Button variant='contained' color='primary' component='span'>
              {filename}
            </Button>
            <Button color='secondary' type='submit'>
          submit
            </Button>
          </label>
        </form>

        <Button onClick={testClick}>
       AnxiosTEST
        </Button>
      </header>
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
