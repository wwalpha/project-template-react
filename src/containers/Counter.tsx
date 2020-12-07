import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from '@actions/app';
import { State } from '@models';
import { Box, Button, createStyles, IconButton, makeStyles, TextField, Theme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const app = (state: State) => state.get('app');

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    button: {
      padding: '6px 8px',
      backgroundPosition: '50% 10%',
      minWidth: 'auto',
    },
    icon: { margin: spacing(0) },
  })
);

const Counter: FunctionComponent<any> = () => {
  const classes = useStyles();
  // actions
  const actions = bindActionCreators(Actions, useDispatch());
  // reducer
  const { count } = useSelector(app);

  const handlePlus = () => actions.plus(1);
  const handleMinus = () => actions.minus(1);

  return (
    <Box display="flex" p={2} justifyContent="center">
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        classes={{
          root: classes.button,
          startIcon: classes.icon,
        }}
        onClick={handlePlus}></Button>
      <TextField id="standard-basic" label="Count" variant="outlined" value={count} />
      <Button
        variant="contained"
        color="primary"
        startIcon={<RemoveIcon />}
        classes={{
          root: classes.button,
          startIcon: classes.icon,
        }}
        onClick={handleMinus}></Button>
    </Box>
  );
};

export default Counter;
