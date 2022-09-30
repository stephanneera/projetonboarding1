// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './Chaussures.js';
import Chaussures from './Chaussures.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';
import count from './count.reducer.js'

import NavBar from './NavBar.js'

const store = createStore(combineReducers({count}));


function App(props) {


  return (
    <Provider store={store}>

      <NavBar/>
    </Provider>
  );
}

export default App;
