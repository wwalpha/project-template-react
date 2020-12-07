import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// immutable.js
// import { routerMiddleware } from 'connected-react-router/immutable';
// immer
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducers from '../reducers';
import { API } from '@utils';
import { createBrowserHistory } from 'history';

// const rootReducer = (state: any, action: any) => {
//   if (action.type === ActionTypes.RESET_STATE) {
//     state = undefined;
//   }

//   return reducers(state, action);
// };

export const history = createBrowserHistory();

const store = createStore(
  reducers(history),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), thunk.withExtraArgument(API), logger)
    // other store enhancers if any
  )
);

// if (module.hot) {
//   module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default));
// }

export default store;
