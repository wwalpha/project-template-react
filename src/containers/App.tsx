import React, { FunctionComponent } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import { Actions } from '@actions/app';
import { State } from '@models';
import { ClassDefault, ClassNamed, FunctionDefault, FunctionNamed } from '@comp';

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    root: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 10%',
    },
  })
);

const app = (state: State) => state.get('app');

const App: FunctionComponent<any> = () => {
  const classes = useStyles();
  // actions
  const actions = bindActionCreators(Actions, useDispatch());
  // reducer
  const { count } = useSelector(app);

  return (
    <div>
      <ClassDefault />
      <ClassNamed />
      <FunctionDefault />
      <FunctionNamed />
    </div>
  );
};

export default App;
