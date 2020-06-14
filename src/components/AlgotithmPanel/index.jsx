import React from 'react'
import createPlotlyComponent from 'react-plotly.js/factory'
import Plotly from 'plotly.js-basic-dist'

import { useSelector } from 'react-redux'

import { Alert, AlertTitle } from '@material-ui/lab'
import * as R from 'ramda'
import useStyles from '../../atoms'

const AlgorithmPanel = __ => {
  const bestValues = useSelector(R.path(['visualisation', 'bestFitnessValues']))
  const bestValuesInGeneration = useSelector(R.path(['visualisation', 'bestFitnessInGeneration']))
  const classes = useStyles()
  const Plot = createPlotlyComponent(Plotly)

  const plotlyData = []

  if (!bestValues || !bestValuesInGeneration) return (renderInfoAlert('Info', 'Wizualizacja niedostępna, uruchom algorytm', classes))

  plotlyData.push({
    name: 'Wartość przystosowania najlepszego osobnika',
    y: bestValues,
    type: 'scatter',
    mode: 'lines',
    line: { shape: 'linear' },
    marker: { color: '#4caf50', size: 10 }
  })

  plotlyData.push({
    name: 'Wartość przystosowania najlepszego osobnika w pokoleniu',
    y: bestValuesInGeneration,
    type: 'scatter',
    mode: 'lines',
    line: { shape: 'linear' },
    marker: { color: '#ff9800', size: 10 }
  })

  return (
    <>
      <Plot
        data={plotlyData}
        layout={{
          height: 700,
          width: 1300,
          margin: 0,
          showlegend: true,
          xaxis: {
            title: {
              text: 'Pokolenie'
            }
          },
          yaxis: {
            title: {
              text: 'Wartość funkcji dopasowania'
            }
          }
        }}
      />
    </>
  )
}

const renderInfoAlert = (title, message, classes) => {
  return (
    <>
      <Alert severity='info' className={classes.alignLeft}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </>)
}

export default AlgorithmPanel
