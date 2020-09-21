import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'controllers/store';
import {RootNavigation} from 'ui/Navigations';

const App = () => {
  return (
    <Provider store={store}>
        <RootNavigation />
    </Provider>
  );
};
export default App;
