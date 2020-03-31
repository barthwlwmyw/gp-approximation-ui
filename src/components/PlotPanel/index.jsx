import React from 'react'
// import Plot from 'react-plotly.js'

import { Card, Divider } from '@material-ui/core'

import useStyles from '../../atoms'

const PlotPanel = __ => {
  const classes = useStyles()
  return (
    <>
      <Card className={classes.card}>
        <p>
            Welcome from inside of plot panel
        </p>
        {/* <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'red' }
            },
            { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] }
          ]}
          layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
        /> */}
        <Divider />
        <p>
            Welcome from below divider
        </p>
      </Card>
    </>
  )
}

export default PlotPanel
