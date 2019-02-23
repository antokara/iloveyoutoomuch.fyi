/**
 * Rsvp page Component
 */
import { Button, Grid, IconButton, MenuItem } from '@material-ui/core';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import { SelectField } from 'Components/pages/rsvp/SelectField';
import { TextField } from 'Components/pages/rsvp/TextField';
import { validators } from 'Helpers/validators';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Field } from 'redux-form';
import { RSVP } from 'Constants/RSVP';

class Guests extends React.Component {
  componentWillMount() {
    const { fields } = this.props;
    if (!fields.length) {
      fields.push({});
    }
  }

  render() {
    const {
      fields,
      meta: { error, submitFailed },
      addGuest,
      age,
      firstName,
      lastName,
      removeGuest
    } = this.props;
    return (
      <Grid container spacing={8}>
        {fields.map((member, index) => (
          <Grid item container xs={12} key={index} spacing={16}>
            <Grid item xs={6} md={4}>
              <Field
                component={TextField}
                name={`${member}.firstName`}
                label={`${firstName} *`}
                type="text"
                disabled={false}
                validate={[validators.required]}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Field
                component={TextField}
                name={`${member}.lastName`}
                label={`${lastName} *`}
                type="text"
                disabled={false}
                validate={[validators.required]}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <Field
                name={`${member}.age`}
                label={`${age} *`}
                component={SelectField}
                validate={[validators.required]}
              >
                {RSVP.AGES.map(age => (
                  <MenuItem key={age.VALUE} value={age.VALUE}>
                    {age.LABEL}
                  </MenuItem>
                ))}
              </Field>
            </Grid>
            {index > 0 && (
              <Grid item>
                <IconButton
                  onClick={() => fields.remove(index)}
                  aria-label={removeGuest}
                >
                  <RemoveCircleOutline color="secondary" />
                </IconButton>
              </Grid>
            )}
          </Grid>
        ))}
        {fields.length < 8 && (
          <Grid item xs={12}>
            <Button type="button" onClick={() => fields.push({})}>
              {addGuest} &nbsp; <AddCircleOutline />
            </Button>
          </Grid>
        )}
        <Grid item xs={12}>
          {submitFailed && error && <span>{error}</span>}
        </Grid>
      </Grid>
    );
  }
}

Guests.propTypes = {
  addGuest: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  removeGuest: PropTypes.string.isRequired
};

export { Guests };
