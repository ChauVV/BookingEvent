import {applyMiddleware, compose, createStore} from 'redux';
import loggerMiddleware from 'redux-logger';
import {createEpicMiddleware} from 'redux-observable';
import epics from 'controllers/Epics';
import reducers from 'controllers/Reducers';

// Create middlewares
const epicMiddleware = createEpicMiddleware(epics);

const middlewares = [epicMiddleware];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(loggerMiddleware);
}

// create store
const store = createStore(reducers, compose(applyMiddleware(...middlewares)));

export {store};
