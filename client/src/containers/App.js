import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { configureStore } from '../store';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './NavBar';
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className='onBoarding'>
        <NavBar />
      </div>
    </Router>
  </Provider>
);

export default App;
