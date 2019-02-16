import { ACTION_TYPES } from 'Constants/ACTION_TYPES';
import { STATUSES } from 'Constants/STATUSES';
import { handleAction } from 'redux-actions';

const defaultState = {
  status: STATUSES.DEFAULT,
  accepted: undefined
};

const reducer = handleAction(
  ACTION_TYPES.RSVP,
  (state, action) => {
    const newState = {
      ...state,
      status: action.meta.status
    };
    if (action.meta.status === STATUSES.PENDING) {
      // set the accepted state on the initial pending status dispatched action
      newState.accepted = action.payload.accepted;
    } else if (action.meta.status === STATUSES.DEFAULT) {
      // reset the accepted state on the default status dispatched action
      newState.accepted = undefined;
    }

    return newState;
  },
  defaultState
);

export const rsvp = {
  defaultState,
  reducer
};
