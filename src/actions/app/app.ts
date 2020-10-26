import { Plus, Minus, PlusAction, MinusAction } from './actions';

/** Plus */
export const plus: PlusAction = (num: number) => async (dispatch, _, api) => {
  dispatch(Plus.request());

  try {
    dispatch(Plus.success(num));
  } catch (err) {
    dispatch(Plus.failure(err));
  }
};

/** Minus */
export const minus: MinusAction = (num: number) => async (dispatch) => {
  dispatch(Minus.request());

  try {
    dispatch(Minus.success(num));
  } catch (err) {
    dispatch(Minus.failure(err));
  }
};
