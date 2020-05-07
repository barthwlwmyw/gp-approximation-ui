import React from 'react'
import createPlotlyComponent from 'react-plotly.js/factory'
import Plotly from 'plotly.js-basic-dist'

import { useSelector } from 'react-redux'

import { Alert, AlertTitle } from '@material-ui/lab'
import * as R from 'ramda'
import useStyles from '../../atoms'

const AlgorithmPanel = __ => {
  const bestValues = useSelector(R.path(['visualisation', 'bestFitnessValues']))
  const averageValues = useSelector(R.path(['visualisation', 'averageFitnessValues']))
  const worstValues = useSelector(R.path(['visualisation', 'worstFitnessValues']))
  const classes = useStyles()
  const Plot = createPlotlyComponent(Plotly)

  const plotlyData = []

  if (!bestValues || !averageValues || !worstValues) return (renderInfoAlert('Info', 'Wizualizacja niedostępna, uruchom algorytm', classes))

  plotlyData.push({
    name: 'Best fitness value',
    y: bestValues,
    type: 'scatter',
    mode: 'lines',
    line: { shape: 'spline' },
    marker: { color: '#4caf50', size: 10 }
  })

  plotlyData.push({
    name: 'Avg. fitness value',
    y: averageValues,
    type: 'scatter',
    mode: 'lines',
    line: { shape: 'spline' },
    marker: { color: '#ff9800', size: 10 }
  })

  plotlyData.push({
    name: 'Worst fitness value',
    y: worstValues,
    type: 'scatter',
    mode: 'lines',
    line: { shape: 'spline' },
    marker: { color: '#f44336', size: 10 }
  })

  return (
    <>
      <Plot
        data={plotlyData}
        layout={{ height: 700, width: 1300, margin: 0, showlegend: true }}
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
