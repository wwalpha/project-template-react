import { immerable } from 'immer';

export default class AppState {
  [immerable] = true;

  count: number = 0;
}
