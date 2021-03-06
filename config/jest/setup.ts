/**
 * setup file for jest
 * @see package.json jest.setupFiles
 */
// tslint:disable-next-line no-import-side-effect
import '@babel/polyfill';
import * as dotenv from 'dotenv';
// @see https://facebook.github.io/jest/docs/en/getting-started.html
// @see https://github.com/airbnb/enzyme#installation
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
// to allow date/time mocking
import { Settings } from 'luxon';

//
// Using the "mockdate" package for a deterministic Date.now() is not enough.
// Unfortunately, the converted time by the "luxon" package defaults to "local"
// which of course can be different from environment to environment.
//
// We can make sure tests/snapshots are identical on every enviroment
// by setting the timezone here.
//
// @see https://moment.github.io/luxon/docs/manual/zones.html#changing-the-default-zone
Settings.defaultZoneName = 'utc';

// configure enzyme with React adapter
Enzyme.configure({ adapter: new Adapter() });

// configure dotenv
dotenv.config();

// fail the tests when a console.error/warn is invoked
const { warn } = global.console;
global.console.warn = (message: string | Error, ...args: Object[]): void => {
  warn.apply(global.console, args);
  if (typeof message === 'string') {
    throw new Error(message);
  } else if (typeof message === 'object' && message instanceof Error) {
    throw message;
  }
};
const { error } = global.console;
global.console.error = (message: string | Error, ...args: Object[]): void => {
  error.apply(global.console, args);
  if (typeof message === 'string') {
    throw new Error(message);
  } else if (typeof message === 'object' && message instanceof Error) {
    throw message;
  }
};

// fixes css specificity between Material-UI JSS and Styled Components
// by ensuring that the Material-UI JSS is injected before Styled Components
// @see https://material-ui.com/customization/css-in-js/#css-injection-order
// @see components/StyleProvider.tsx
document.head.appendChild(document.createComment('jss-insertion-point'));
