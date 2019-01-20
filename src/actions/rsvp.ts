import { ACTION_TYPES } from 'Constants/ACTION_TYPES';
import { FETCH_METHODS } from 'Constants/FETCH_METHODS';
import { STATUSES } from 'Constants/STATUSES';
import { fetchApi } from 'Helpers/fetchApi';

export const rsvp = data => dispatch => {
  // dispatch the pending action
  dispatch({
    type: ACTION_TYPES.RSVP,
    payload: data,
    meta: {
      status: STATUSES.PENDING
    }
  });

  // initiate the fetch and return the promise
  return fetchApi(process.env.RSVP_API_URL, {
    method: FETCH_METHODS.POST,
    body: JSON.stringify(data)
  });
};
