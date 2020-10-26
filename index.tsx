import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core';
import store from './src/store';
import theme from './src/Theme';
import App from './src/containers/App';

const provider = (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
);

const root = document.getElementById('root');

// 画面描画
render(provider, root);
