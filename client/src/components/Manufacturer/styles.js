import { makeStyles } from '@material-ui/core/styles';
import { deepPurple, red } from '@material-ui/core/colors'
export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:theme.palette.text.secondary,
  },
}));