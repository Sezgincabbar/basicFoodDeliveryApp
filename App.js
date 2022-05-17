import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './navigation/MainTab';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import reduxStore from './redux/store';

const App = () => {
  const {store, persiStore} = reduxStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persiStore}>
        <NavigationContainer>
          <MainTab />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
