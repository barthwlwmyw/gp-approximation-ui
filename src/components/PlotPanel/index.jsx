import React from 'react'
import createPlotlyComponent from 'react-plotly.js/factory'
import Plotly from 'plotly.js-basic-dist'
import { useSelector } from 'react-redux'

import { Alert, AlertTitle } from '@material-ui/lab'

import * as R from 'ramda'
import useStyles from '../../atoms'

const PlotPanel = __ => {
  const data = useSelector(R.path(['visualisation', 'dataSourcePlot']))

  const classes = useStyles()

  if (data != null) {
    return renderPlot(data)
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

const renderPlot = (data) => {
  const Plot = createPlotlyComponent(Plotly)
  return (
    <>
      <Plot
        data={[
          {
            ...data,
            type: 'scatter',
            mode: 'markers',
            marker: { color: '#115293', size: 10 }
          }
        ]}
        layout={{ height: 700, width: 1300, margin: 0 }}
      />
    </>)
}

export default PlotPanel
