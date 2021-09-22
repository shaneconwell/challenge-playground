import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
    color: theme.palette.secondary.main
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
}));

export default function ProTip() {
  const classes = useStyles();
  return (
    <Typography className={classes.root} >

      Pro tip: See more{' '}
      <Link color="inherit" variant="inherit" href="https://material-ui.com/getting-started/templates/">templates</Link> on the
      Material-UI documentation.
    </Typography>
  );
}