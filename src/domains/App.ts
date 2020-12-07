import { immerable, produce } from 'immer';

export default class AppState {
  [immerable] = true;

  count: number = 0;

  plus = (num: number) =>
    produce(this, (draft) => {
      draft.count += num;
    });

  minus = (num: number) =>
    produce(this, (draft) => {
      draft.count -= num;
    });
}
