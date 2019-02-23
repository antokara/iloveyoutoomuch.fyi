/**
 * Select Field Component for redux-form
 */
import { TextField } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import * as React from 'react';

const SelectField = ({
  label,
  input,
  meta: { touched, invalid, error },
  children,
  ...custom
}) => (
  <TextField
    select
    fullWidth
    label={label}
    placeholder={`Select your ${label}`}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  >
    {children}
  </TextField>
);

SelectField.propTypes = {
  label: PropTypes.string.isRequired
};

export { SelectField };
