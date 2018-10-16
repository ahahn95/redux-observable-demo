import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

const LOAD = 'posts/LOAD';
const UPDATE = 'posts/UPDATE';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case UPDATE:
      return action.payload;
    default:
      return state;
  }
}

export const loadPosts = id => ({
  type: LOAD,
  payload: id
});

export const updatePosts = payload => ({
  type: UPDATE,
  payload
});

export const postsEpic$ = (action$, state$, { getJSON }) =>
  action$.pipe(
    ofType(LOAD),
    mergeMap(action =>
      getJSON('https://jsonplaceholder.typicode.com/posts').pipe(
        map(posts => posts.filter(post => action.payload === post.userId))
      )
    ),
    mergeMap(posts => of(updatePosts(posts)))
  );
