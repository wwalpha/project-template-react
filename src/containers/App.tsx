import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Counter from './Counter';

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    root: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 10%',
    },
  })
);

const App: FunctionComponent<any> = () => {
  const classes = useStyles();

  return <Counter />;
};

export default App;
