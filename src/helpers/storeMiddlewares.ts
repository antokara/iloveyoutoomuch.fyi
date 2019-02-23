import { routerMiddleware } from 'connected-react-router';
import { history } from 'Helpers/history';
import { default as promiseMiddleware } from 'redux-promise';
import { default as thunk } from 'redux-thunk';
import { createLogger } from 'ReduxLogger';

const storeMiddlewares = [thunk];

// @see https://github.com/acdlite/redux-promise
// note, it is important that this is defined second, if not first
storeMiddlewares.push(promiseMiddleware);

// add the logger middleware but only when not in production or test
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  storeMiddlewares.push(createLogger());
}

// add the middleware for intercepting and dispatching navigation actions
storeMiddlewares.push(routerMiddleware(history));

export { storeMiddlewares };
