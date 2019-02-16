import { ACTION_TYPES } from 'Constants/ACTION_TYPES';
import { STATUSES } from 'Constants/STATUSES';
import { reset } from 'redux-form';

export const resetRsvp = () => dispatch => {
  dispatch(reset('rsvp'));
  dispatch({
    type: ACTION_TYPES.RSVP,
    meta: {
      status: STATUSES.DEFAULT
    }
  });
};
