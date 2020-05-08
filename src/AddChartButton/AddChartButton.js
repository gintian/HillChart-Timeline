import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function AddChartButton() {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddBoxIcon />}
      >
      NEW CHART
    </Button>
  );
}
