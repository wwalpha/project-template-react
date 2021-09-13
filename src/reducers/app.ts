import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from 'typings';

const appState: AppState = {
  count: 0,
};

const slice = createSlice({
  name: 'app',
  initialState: appState,
  reducers: {
    // start loading
    APP_PLUS: (state, { payload }: PayloadAction<number>) => {
      state.count += payload;
    },

    // end loading
    APP_MINUS: (state, { payload }: PayloadAction<number>) => {
      state.count -= payload;
    },
  },
});

export default slice;
