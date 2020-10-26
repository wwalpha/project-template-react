import { handleActions, Action } from 'redux-actions';
import { App } from '@models';
import { ActionTypes } from '@constants';
import { App01Payload, App02Payload } from '@actions/app';

const app = handleActions<App, any>(
  {
    [ActionTypes.APP_PLUS_REQUEST]: (store: App) => store,
    [ActionTypes.APP_PLUS_SUCCESS]: (store: App, { payload: { num } }: Action<App01Payload>) => store.plus(num),
    [ActionTypes.APP_PLUS_FAILURE]: (store: App) => store,

    [ActionTypes.APP_MINUS_REQUEST]: (store: App) => store,
    [ActionTypes.APP_MINUS_SUCCESS]: (store: App, { payload: { num } }: Action<App02Payload>) => store.minus(num),
    [ActionTypes.APP_MINUS_FAILURE]: (store: App) => store,
  },

  new App()
);

export default app;
