import React from 'react'
import PropTypes from 'prop-types'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { AppBar, Box, Card, Typography } from '@material-ui/core'
import useStyles from '../../atoms'

const AlgorithmPanel = __ => {
  const classes = useStyles()

  function TabPanel (props) {
    const { children, value, index, ...other } = props

    return (
      <Typography
        component='div'
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    )
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  }

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    }
  }

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <Card className={classes.card}>
        <AppBar position='static'>
          <Tabs value={value} onChange={handleChange} aria-label='simple tabs example'>
            <Tab label='Wizualizacja danych' {...a11yProps(0)} />
            <Tab label='Wizualizacja przebiegu algorytmu' {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            Wizualizacja danych
        </TabPanel>
        <TabPanel value={value} index={1}>
            Wizualizacja przebiegu algorytmu
        </TabPanel>
      </Card>
    </>
  )
}

export default AlgorithmPanel
