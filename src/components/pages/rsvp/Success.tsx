/**
 * Success Component
 * shows the success message with its appropriate style
 */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  color: green;
  font-size: 1.1em;
  margin: 1em 0 2em 0;
`;

const Success: React.FunctionComponent = ({
  children
}): React.ReactElement<React.ReactNode> => <Wrapper>{children}</Wrapper>;

Success.propTypes = {
  children: PropTypes.string.isRequired
};

export { Success };
