import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer, rootEpic } from 'reduxModules';
import { createEpicMiddleware } from 'redux-observable';

const configureStore = () => {
  const epicMiddleware = createEpicMiddleware();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore();
