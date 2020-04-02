import React from 'react'
import createPlotlyComponent from 'react-plotly.js/factory'
import Plotly from 'plotly.js-basic-dist'

const AlgorithmPanel = __ => {
  const Plot = createPlotlyComponent(Plotly)

  return (
    <>
      <Plot
        data={[
          {
            type: 'scatter',
            mode: 'markers',
            marker: { color: '#115293', size: 10 }
          }
        ]}
        layout={{ height: 700, width: 1400, margin: 0 }}
      />
    </>
  )
}

export default AlgorithmPanel
