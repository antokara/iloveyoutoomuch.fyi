import { connectRouter } from 'connected-react-router';
import { history } from 'Helpers/history';
import { rsvp } from 'Reducers/rsvp';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export const index = combineReducers({
  form: formReducer,
  router: connectRouter(history),
  rsvp: rsvp.reducer
});
