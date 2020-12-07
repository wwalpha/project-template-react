import React, { FunctionComponent } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Box, createStyles, IconButton, makeStyles, TextField, Theme } from '@material-ui/core';
import { Actions } from '@actions/app';
import { State } from '@models';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
    },
  })
);

const app = (state: State) => state.get('app');

const Example: FunctionComponent<any> = () => {
  const classes = useStyles();
  // actions
  const actions = bindActionCreators(Actions, useDispatch());
  // reducer
  const { count } = useSelector(app);

  const handlePlus = () => actions.plus(1);
  const handleMinus = () => actions.minus(1);

  return (
    <Box display="flex" justifyContent="center" justifyItems="center" alignItems="center" className={classes.root}>
      <TextField label="Counter" value={count} />
      <IconButton color="primary" size="medium" onClick={handlePlus}>
        <AddIcon />
      </IconButton>
      <IconButton color="secondary" size="medium" onClick={handleMinus}>
        <RemoveIcon />
      </IconButton>
    </Box>
  );
};

export default Example;
