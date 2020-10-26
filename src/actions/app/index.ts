import { ThunkActionDispatch } from 'typings/redux-thunk';
import { plus, minus } from './app';
export { App01Payload, App02Payload } from './actions';
export * as Actions from './app';

// ------------------------------------------------------------------------------------------
// TypeScript Definetion
// ------------------------------------------------------------------------------------------
export interface AppActions {
  plus(num: number): ThunkActionDispatch<typeof plus>;
  minus(num: number): ThunkActionDispatch<typeof minus>;
}
