import { createAction, Action, ActionFunction1, ActionFunction0, ActionFunction2 } from 'redux-actions';
import { ThunkAction } from 'redux-thunk';
import { ActionTypes } from '@constants';
import { ErrorPayload, APIClass } from 'typings/types';
import { State } from '@models';

export const request = (actionType: string): ActionFunction0<Action<any>> => createAction(actionType);

export const failure = (actionType: string): ActionFunction1<Error, Action<ErrorPayload>> =>
  createAction(actionType, (error: Error) => ({ error }));

export const Plus = {
  request: request(ActionTypes.APP_MINUS_REQUEST),
  success: createAction(ActionTypes.APP_PLUS_SUCCESS, (num: number): App01Payload => ({ num })),
  failure: failure(ActionTypes.APP_PLUS_FAILURE),
};

export const Minus = {
  request: request(ActionTypes.APP_MINUS_REQUEST),
  success: createAction(ActionTypes.APP_MINUS_SUCCESS, (num: number): App02Payload => ({ num })),
  failure: failure(ActionTypes.APP_MINUS_FAILURE),
};

/** Plus */
export interface App01Payload {
  num: number;
}

type PlusPayload = App01Payload | ErrorPayload;
type PlusThunkAction = ThunkAction<Promise<void>, State, APIClass, Action<PlusPayload>>;
export type PlusAction = ActionFunction1<number, PlusThunkAction>;

/** Plus */
export interface App02Payload {
  num: number;
}

type MinusPayload = App02Payload | ErrorPayload;
type MinusThunkAction = ThunkAction<Promise<void>, State, APIClass, Action<MinusPayload>>;
export type MinusAction = ActionFunction1<number, MinusThunkAction>;
