import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Box, Button, Card, Divider, Slider, Typography } from '@material-ui/core'
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore'
import SendIcon from '@material-ui/icons/Send'
import useStyles from '../../atoms'
import axios from 'axios'
import SearchIcon from '@material-ui/icons/Search'

import { loadDatafile } from '../../actions'
const ParamsPanel = __ => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [dataFile, setDataFile] = useState('')
  const [dataFilename, setDataFilename] = useState('Wybierz plik z danymi')

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
        <p>
          <Typography id='population-size-slider' variant='h6' gutterBottom>
           Parametry algorytmu
          </Typography>
        </p>
        <Divider />
        <div className={classes.mediumPadding}>
          <Typography id='population-size-slider' gutterBottom>
           Rozmiar populacji
          </Typography>
          <Slider
            defaultValue={100}
            valueLabelDisplay='auto'
            step={25}
            marks
            min={25}
            max={500}
          />
          <Typography id='generations-number-slider' gutterBottom>
                Liczba pokoleń
          </Typography>
          <Slider
            defaultValue={30}
            valueLabelDisplay='auto'
            step={10}
            marks
            min={10}
            max={200}
          />
          <Typography id='crossover-slider' gutterBottom>
                Prawdopodobieństwo krzyżowania
          </Typography>
          <Slider
            defaultValue={0.3}
            aria-labelledby='discrete-slider'
            valueLabelDisplay='auto'
            step={0.05}
            marks
            min={0}
            max={1}
          />
          <Typography id='mutation-slider' gutterBottom>
                Prawdopodobieństwo mutacji
          </Typography>
          <Slider
            defaultValue={0.1}
            aria-labelledby='discrete-slider'
            valueLabelDisplay='auto'
            step={0.05}
            marks
            min={0}
            max={1}
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
        <Box display='flex' p={1}>
          <Box className={classes.alignLeft} p={1} flexGrow={1}>
            <Button variant='contained' onClick={() => { window.alert('not implemented') }} color='tertiary' component='span' startIcon={<SettingsBackupRestoreIcon />}>
              Reset
            </Button>
          </Box>
          <Box p={1}>
            <Button variant='contained' onClick={() => { window.alert('not implemented') }} color='primary' component='span' startIcon={<SendIcon />}>
                  Start
            </Button>
          </Box>
        </Box>
      </Card>
    </>)
}

export default ParamsPanel
