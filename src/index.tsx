import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core';
import store from './store';
import theme from './Theme';
import App from './containers/App';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);

const provider = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </PersistGate>
  </Provider>
);

const root = document.getElementById('root');

// 画面描画
render(provider, root);
