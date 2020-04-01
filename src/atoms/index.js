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
  }
}))

export default useStyles
