import { Actions } from '@reducers';
import { AppDispatch } from 'typings';

/** Plus */
export const plus = (num: number) => (dispatch: AppDispatch) => {
  dispatch(Actions.APP_PLUS(num));
};

/** Minus */
export const minus = (num: number) => (dispatch: AppDispatch) => {
  dispatch(Actions.APP_MINUS(num));
};
