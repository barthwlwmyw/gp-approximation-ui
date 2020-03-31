import React from 'react'

import { Card, Grid, Slider, Typography } from '@material-ui/core'
import useStyles from '../../atoms'

// import React, { useState } from 'react'

// import { Button, Card, Grid, Slider, Typography } from '@material-ui/core'
// import SearchIcon from '@material-ui/icons/Search'
// import Icon from '@material-ui/core/Icon'
// import axios from 'axios'
// import useStyles from '../../atoms'

const ParamsPanel = __ => {
  const classes = useStyles()

  // const [dataFile, setDataFile] = useState('')
  // const [dataFilename, setDataFilename] = useState('Wybierz plik z danymi')

  // const onFileInputChange = e => {
  //   setDataFile(e.target.files[0])
  //   setDataFilename(e.target.files[0].name)
  // }

  // const onFileInputSubmit = async e => {
  //   e.preventDefault()
  //   const formData = new window.FormData()
  //   formData.append('file', dataFile)
  //   try {
  //     const res = await axios.post('https://localhost:44322/api/Test', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     })

  //     console.log(res)
  //   } catch (err) {
  //     window.alert(err)
  //   } finally {
  //   }
  // }

  return (
    <>
      <Card className={classes.defaultPadding}>
        <Grid container spacing={6}>
          <Grid item xs={4} className={classes.gridItem}>
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
          </Grid>
          <Grid item xs={4} className={classes.gridItem}>
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
          </Grid>
          <Grid item xs={4} className={classes.gridItem}>
            {/* <form onSubmit={onFileInputSubmit}>
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
                <p>
                  {dataFilename}
                </p>
                <Button variant='contained' color='primary' type='submit' endIcon={<Icon>send</Icon>}>
                  Start
                </Button>
              </label>
            </form> */}
          </Grid>
        </Grid>
      </Card>
    </>)
}

export default ParamsPanel
