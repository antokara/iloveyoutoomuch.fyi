/**
 * Text Field Component for redux-form
 */
import { TextField as Field } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import * as React from 'react';

const TextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <Field
    fullWidth
    label={label}
    placeholder={`Enter your ${label}`}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

TextField.propTypes = {
  label: PropTypes.string.isRequired
};

export { TextField };
