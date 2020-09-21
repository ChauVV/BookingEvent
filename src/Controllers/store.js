import {applyMiddleware, compose, createStore} from 'redux';
import loggerMiddleware from 'redux-logger';
import {createEpicMiddleware} from 'redux-observable';
import epics from 'controllers/Epics';
import reducers from 'controllers/Reducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authen'],
  mergeStrategy: 'merge',
};

const persistedReducer = persistReducer(persistConfig, reducers);

// Create middlewares
const epicMiddleware = createEpicMiddleware(epics);

const middlewares = [epicMiddleware];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(loggerMiddleware);
}

// create store
const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store);

export {store, persistor};
