/**
 * fixes css specificity between Material-UI JSS and Styled Components
 * by ensuring that the Material-UI JSS is injected before Styled Components
 *
 * @see https://material-ui.com/customization/css-in-js/#css-injection-order
 */
import { createGenerateClassName, jssPreset } from '@material-ui/core';
import { create } from 'jss';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { JssProvider } from 'react-jss';

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: 'jss-insertion-point'
});

// using this HOC on the App Component,
// the Material-UI Components will always have access to the theme
// without a HOC on each Component
const StyleProvider = ({ children }) => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    {children}
  </JssProvider>
);

StyleProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

StyleProvider.defaultProps = {
  children: null
};

export { StyleProvider };
