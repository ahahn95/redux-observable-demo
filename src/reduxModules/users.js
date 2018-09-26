import { ofType } from 'redux-observable';

const LOAD = 'users/LOAD';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export const getUsers = () => ({
  type: LOAD
});

//export const users

export const usersEpic$ = action$ => action$.pipe(ofType(LOAD));
