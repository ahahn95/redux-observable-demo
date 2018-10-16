import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import usersReducer, { usersEpic$ } from 'reduxModules/users';
import postsReducer, { postsEpic$ } from 'reduxModules/posts';

export const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer
});

export const rootEpic = combineEpics(usersEpic$, postsEpic$);
