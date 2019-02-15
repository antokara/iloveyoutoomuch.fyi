/**
 * Form Component
 */
import * as React from 'react';
import styledComponents from 'styled-components';

const Form: React.FunctionComponent = styledComponents.form`
  text-align: center;
`;

const Loading: React.FunctionComponent = ({
  children
}): React.ReactElement<React.ReactNode> => <Form>{children}</Form>;

export { Form };
