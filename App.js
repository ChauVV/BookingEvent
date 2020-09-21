import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from 'controllers/store';
import {RootNavigation} from 'ui/Navigations';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};
export default App;
