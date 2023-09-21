import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './Navigation';
import  store  from '../src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}