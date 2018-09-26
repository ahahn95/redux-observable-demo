import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import usersReducer, { usersEpic$ } from 'reduxModules/users';

export const rootReducer = combineReducers({
  users: usersReducer
});

export const rootEpic = combineEpics(usersEpic$);
