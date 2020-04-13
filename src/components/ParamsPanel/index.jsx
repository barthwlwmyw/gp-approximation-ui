import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as R from 'ramda'

import { AppBar, Toolbar, Box, Button, Card, Divider, Slider, Typography } from '@material-ui/core'
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore'
import SendIcon from '@material-ui/icons/Send'
import useStyles from '../../atoms'
import axios from 'axios'
import SearchIcon from '@material-ui/icons/Search'
import LinearProgress from '@material-ui/core/LinearProgress'

import { loadDatafile, createApproxTask } from '../../actions'
const ParamsPanel = __ => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const taskProgress = useSelector(R.path(['approximationTask', 'taskProgress']))

  const defaultParams = {
    populationSize: 100,
    generationsNumber: 30,
    crossoverProbability: 0.3,
    mutationProbability: 0.1
  }

  const [dataFile, setDataFile] = useState('')
  const [dataFilename, setDataFilename] = useState('Wybierz plik z danymi')

  const [populationSize, setPopulationSize] = useState(defaultParams.populationSize)
  const [generationsNumber, setGenerationsNumber] = useState(defaultParams.generationsNumber)
  const [crossoverProbability, setCrossoverProbability] = useState(defaultParams.crossoverProbability)
  const [mutationProbability, setMutationProbability] = useState(defaultParams.mutationProbability)

  const onApproxTaskStarted = e => {
    dispatch(createApproxTask())
  }

  const onFileInputChange = e => {
    const file = e.target.files[0]
    if (file) {
      dispatch(loadDatafile(file))

      setDataFile(e.target.files[0])
      setDataFilename(e.target.files[0].name)
    }
  }

  const onFileInputSubmit = async e => {
    e.preventDefault()
    const formData = new window.FormData()
    formData.append('file', dataFile)
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
    <>
      <Card className={classes.card}>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
            Parametry algorytmu
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.mediumPadding}>
          <Typography id='population-size-slider' gutterBottom>
           Rozmiar populacji:&nbsp;
            <span className={classes.primaryColor}>{populationSize}</span>
          </Typography>
          <Slider
            defaultValue={defaultParams.populationSize}
            valueLabelDisplay='auto'
            step={25}
            marks
            min={25}
            max={500}
            onChange={(e, val) => setPopulationSize(val)}
          />
          <Typography id='generations-number-slider' gutterBottom>
                Liczba pokoleń:&nbsp;
            <span className={classes.primaryColor}>{generationsNumber}</span>
          </Typography>
          <Slider
            defaultValue={defaultParams.generationsNumber}
            valueLabelDisplay='auto'
            step={10}
            marks
            min={10}
            max={200}
            onChange={(e, val) => setGenerationsNumber(val)}
          />
          <Typography id='crossover-slider' gutterBottom>
                Prawdopodobieństwo krzyżowania:&nbsp;
            <span className={classes.primaryColor}>{crossoverProbability.toFixed(2)}</span>
          </Typography>
          <Slider
            defaultValue={defaultParams.crossoverProbability}
            aria-labelledby='discrete-slider'
            valueLabelDisplay='auto'
            step={0.05}
            marks
            min={0}
            max={1}
            onChange={(e, val) => setCrossoverProbability(val)}
          />
          <Typography id='mutation-slider' gutterBottom>
                Prawdopodobieństwo mutacji:&nbsp;
            <span className={classes.primaryColor}>{mutationProbability.toFixed(2)}</span>
          </Typography>
          <Slider
            defaultValue={defaultParams.mutationProbability}
            aria-labelledby='discrete-slider'
            valueLabelDisplay='auto'
            step={0.05}
            marks
            min={0}
            max={1}
            onChange={(e, val) => setMutationProbability(val)}
          />
        </div>
        <Divider />
        <Box className={classes.alignLeft} p={2}>
          <form onSubmit={onFileInputSubmit}>
            <input
              className={classes.input}
              id='dataFile'
              type='file'
              onChange={onFileInputChange}
            />
            <label htmlFor='dataFile'>
              <Button variant='contained' color='default' component='span' startIcon={<SearchIcon />}>
                  Źródło danych
              </Button>
            </label>
            <span className={classes.card}>
              {dataFilename}
            </span>
          </form>
        </Box>
        <Divider />
        {renderProgressBar(taskProgress)}
        <Box display='flex' p={1}>
          <Box className={classes.alignLeft} p={1} flexGrow={1}>
            <Button variant='contained' onClick={() => { window.alert('not implemented') }} color='tertiary' component='span' startIcon={<SettingsBackupRestoreIcon />}>
              Reset
            </Button>
          </Box>
          <Box p={1}>
            <Button variant='contained' onClick={onApproxTaskStarted} color='primary' component='span' startIcon={<SendIcon />}>
                  Start
            </Button>
          </Box>
        </Box>
      </Card>
    </>)
}

const renderProgressBar = (taskProgress) => {
  if (taskProgress !== 0 && taskProgress !== 100) {
    return <LinearProgress variant='determinate' visible={false} value={taskProgress} />
  } else {
    return null
  }
}

export default ParamsPanel
