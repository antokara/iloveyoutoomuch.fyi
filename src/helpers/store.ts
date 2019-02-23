import { storeMiddlewares } from 'Helpers/storeMiddlewares';
import { index } from 'Reducers/index';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'ReduxDevtoolsExtension';

// apply middlewares to our enhancer
let storeEnhancer = applyMiddleware(...storeMiddlewares);

// add the redux devtools enhancer but only when not in production or test
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  const composeEnhancers = composeWithDevTools({});
  storeEnhancer = composeEnhancers(storeEnhancer);
}

// create the store with our reducer and enhancer
export const store = createStore(index, storeEnhancer);
