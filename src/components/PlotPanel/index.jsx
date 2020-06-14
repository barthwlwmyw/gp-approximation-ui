import React from 'react'
import createPlotlyComponent from 'react-plotly.js/factory'
import Plotly from 'plotly.js-dist'
import { useSelector } from 'react-redux'

import { Alert, AlertTitle } from '@material-ui/lab'

import * as R from 'ramda'
import useStyles from '../../atoms'

const PlotPanel = __ => {
  const data = useSelector(R.path(['visualisation', 'dataSourcePlot']))
  const dimensions = useSelector(R.path(['visualisation', 'dimensions']))
  const evaluatedValues = useSelector(R.path(['visualisation', 'evaluatedValues']))

  const classes = useStyles()

  if (data != null) {
    if (dimensions === 2) {
      return renderPlot2D(data, evaluatedValues)
    } else if (dimensions === 3) {
      return renderPlot3D(data, evaluatedValues)
    }
  } else {
    return renderInfoAlert('Info', 'Wizualizacja niedostępna, podaj źródło danych', classes)
  }
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

const renderPlot2D = (data, evaluatedValues) => {
  const Plot = createPlotlyComponent(Plotly)

  const plotlyData = []

  plotlyData.push({
    name: 'Podany zbiór wartości',
    ...data,
    type: 'scatter',
    mode: 'markers',
    marker: { color: '#115293', size: 10 }
  })

  if (evaluatedValues) {
    plotlyData.push({
      name: 'Funkcja aproksymująca',
      type: 'scatter',
      x: data.x,
      y: evaluatedValues,
      mode: 'lines',
      line: { shape: 'spline' },
      marker: { color: '#e33371', size: 10 }
    })
  }

  return (
    <>
      <Plot
        data={plotlyData}
        layout={{ height: 700, width: 1300, margin: 0, showlegend: true }}
      />
    </>)
}

const renderPlot3D = (data, evaluatedValues) => {
  const Plot = createPlotlyComponent(Plotly)

  const plotlyData = []

  plotlyData.push({
    name: 'Podany zbiór wartości',
    x: data.x,
    y: data.y,
    z: data.z,
    type: 'scatter3d',
    mode: 'markers',
    marker: { color: '#115293', size: 10 }
  })

  return (
    <>
      <Plot
        data={plotlyData}
        layout={{ height: 700, width: 1300, margin: 0, showlegend: true }}
      />
    </>)
}

export default PlotPanel
