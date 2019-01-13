/**
 * Rsvp page Component
 */
import { TextField } from '@material-ui/core';
import { PageWrapper } from 'Components/layouts/themed/PageWrapper';
import { MarkdownWrapper } from 'Components/shared/MarkdownWrapper';
import { validators } from 'Helpers/validators';
import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { Field } from 'redux-form';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const Rsvp: React.FunctionComponent = ({
  body
}): React.ReactElement<React.ReactNode> => (
  <PageWrapper>
    <MarkdownWrapper>
      <ReactMarkdown source={body} />
      <form onSubmit={() => {}}>
        <Field
          component={renderTextField}
          name="firstName"
          label="First Name *"
          type="text"
          disabled={false}
          validate={[validators.required]}
        />
      </form>
    </MarkdownWrapper>
  </PageWrapper>
);

export { Rsvp };
