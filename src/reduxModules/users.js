import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';

const LOAD = 'users/LOAD';
const UPDATE = 'users/UPDATE';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case UPDATE:
      return action.payload;
    default:
      return state;
  }
}

export const loadUsers = () => ({
  type: LOAD
});

export const updateUsers = payload => ({
  type: UPDATE,
  payload
});

export const usersEpic$ = (action$, state$, { getJSON }) =>
  action$.pipe(
    ofType(LOAD),
    mergeMap(() => getJSON(`https://jsonplaceholder.typicode.com/users`)),
    map(response => updateUsers(response))
  );
