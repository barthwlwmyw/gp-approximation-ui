import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, Grid, Slider, TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  defaultPadding: {
    margin: '4px',
    padding: '4px'
  }
}))

const ParamsPanel = __ => {
  const classes = useStyles()

  return (
    <>
      <Card className={classes.defaultPadding}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField className={classes.defaultPadding} id='standard-basic' label='Rozmiar populacji' />
            <TextField className={classes.defaultPadding} id='standard-basic' label='Liczba pokoleń' />
          </Grid>
          <Grid item xs={4}>
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
          <Grid item xs={4}>
            <form onSubmit={() => {}}>
              <input
                // className={classes.input}
                id='customFile'
                type='file'
                onChange={() => {}}
              />
              <label htmlFor='customFile'>
                <Button variant='contained' color='primary' component='span'>
                  lolol
                </Button>
                <Button color='secondary' type='submit'>
          submit
                </Button>
              </label>
            </form>
          </Grid>
        </Grid>
      </Card>
    </>)
}

export default ParamsPanel
