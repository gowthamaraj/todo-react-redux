import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import reducer from './redux-state/reducer'
import {Provider} from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'data',
  storage: storage,
};
const pReducer = persistReducer(persistConfig, reducer);
const store = createStore(pReducer)
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);