import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    logger
  )
);

export default function configureStore(preloadedState) {
  return createStore(
    reducer,
    preloadedState,
    enhancer
  )
}