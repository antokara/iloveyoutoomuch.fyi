import { ACTION_TYPES } from 'Constants/ACTION_TYPES';
import { FETCH_METHODS } from 'Constants/FETCH_METHODS';
import { STATUSES } from 'Constants/STATUSES';
import { fetchApi } from 'Helpers/fetchApi';
import { exception } from 'react-ga';

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
  // @todo try to use redux-promise or remove it
  return fetchApi(process.env.RSVP_API_URL, {
    method: FETCH_METHODS.POST,
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.status !== 200) {
        // failure - API failed
        dispatch({
          type: ACTION_TYPES.RSVP,
          payload: new Error('failed'),
          error: true,
          meta: {
            data,
            status: STATUSES.FAILED
          }
        });
      }

      // success
      dispatch({
        type: ACTION_TYPES.RSVP,
        payload: 'ok',
        meta: {
          data,
          status: STATUSES.SUCCEEDED
        }
      });
    })
    .catch((e: exception) => {
      // failure - probably network issue
      dispatch({
        type: ACTION_TYPES.RSVP,
        payload: new Error(e),
        error: true,
        meta: {
          data,
          status: STATUSES.FAILED
        }
      });
    });
};
