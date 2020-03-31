import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  defaultPadding: {
    margin: '12px',
    padding: '24px'
  },
  input: {
    display: 'none'
  },
  button: {
    margin: theme.spacing(1)
  },
  card: {
    margin: '12px'
  },
  alignLeft: {
    'text-align': 'left'
  }
}))

export default useStyles
