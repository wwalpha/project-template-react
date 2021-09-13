import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from '../reducers';

export const history = createBrowserHistory();

const persistedReducer = persistReducer(
  {
    key: 'root',
    version: 1,
    storage,
  },
  reducers(history)
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)).concat(logger),
});

export default store;
