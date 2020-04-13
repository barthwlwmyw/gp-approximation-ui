import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: 'none'
  },
  button: {
    margin: theme.spacing(1)
  },
  defaultPadding: {
    padding: '16px'
  },
  mediumPadding: {
    padding: '32px'
  },
  card: {
    margin: '14px'
  },
  alignLeft: {
    'text-align': 'left'
  },
  primaryColor: {
    color: '#115293'
  },
  gridItemParamsPanel: {
    'min-width': '300px'
  }
}))

export default useStyles
