import React, { useState } from 'react'
import createPlotlyComponent from 'react-plotly.js/factory'
import Plotly from 'plotly.js-basic-dist'
// import Plot from 'react-plotly.js'

import axios from 'axios'
import { Box, Button, Card, Divider } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import DeleteIcon from '@material-ui/icons/Delete'
import useStyles from '../../atoms'

const PlotPanel = __ => {
  const classes = useStyles()

  // const Plotly = window.Plotly
  const Plot = createPlotlyComponent(Plotly)

  const [dataFile, setDataFile] = useState('')
  const [dataFilename, setDataFilename] = useState('Wybierz plik z danymi')

  const onFileInputChange = e => {
    setDataFile(e.target.files[0])
    setDataFilename(e.target.files[0].name)
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
        <Plot
          data={[
            {
              type: 'scatter',
              mode: 'markers',
              marker: { color: '#115293', size: 10 }
            }
          ]}
          layout={{ height: 400, width: 800 }}
        />
        <Divider />
        <Box display='flex' p={1}>
          <Box className={classes.alignLeft} p={1} flexGrow={1}>
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
          <Box p={1}>
            <Button variant='contained' onClick={() => { window.alert('not implemented') }} color='secondary' component='span' startIcon={<DeleteIcon />}>
                  Reset
            </Button>
          </Box>
        </Box>

      </Card>
    </>
  )
}

export default PlotPanel
