/**
 * addMoreGuests Component
 * shows the add More Guests message with its appropriate style
 */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  text-align: right;
`;

const AddMoreGuests: React.FunctionComponent = ({
  resetRsvp,
  addMoreGuests
}): React.ReactElement<React.ReactNode> => (
  <Wrapper>
    <a onClick={resetRsvp} role="button" href="javascript:void(0);">
      {addMoreGuests}
    </a>
  </Wrapper>
);

AddMoreGuests.propTypes = {
  resetRsvp: PropTypes.func.isRequired,
  addMoreGuests: PropTypes.string.isRequired
};

export { AddMoreGuests };
