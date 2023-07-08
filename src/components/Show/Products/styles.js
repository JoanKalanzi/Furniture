import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    fontFamily: 'Ysabeau SC, sans-serif',
  },
  root: {
    flexGrow: 1,
    fontFamily: 'Ysabeau SC, sans-serif',
  },
  productTitle: {
    fontSize: '24px',
  },

}));
