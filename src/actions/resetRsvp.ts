import { ACTION_TYPES } from 'Constants/ACTION_TYPES';
import { STATUSES } from 'Constants/STATUSES';

export const resetRsvp = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.RSVP,
    meta: {
      status: STATUSES.DEFAULT
    }
  });
};
