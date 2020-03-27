import React from 'react';
import Screen from './src/screens';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const rootStore = createStore(reducers, applyMiddleware(thunk));
rootStore.subscribe(() => {
  console.log(rootStore.getState());
});

export default function Splash() {
  return (
    <Provider store={rootStore}>
      <Screen/>
    </Provider>
  );
}

