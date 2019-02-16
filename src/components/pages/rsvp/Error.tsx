/**
 * Error Component
 * shows the error with its appropriate style
 */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  color: red;
  font-size: 1.1em;
  margin: 1em 0 2em 0;
  text-align: center;
`;

const Error: React.FunctionComponent = ({
  children
}): React.ReactElement<React.ReactNode> => <Wrapper>{children}</Wrapper>;

Error.propTypes = {
  children: PropTypes.string.isRequired
};

export { Error };
