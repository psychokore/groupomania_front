import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

import store from './store';
import { Provider} from 'react-redux';

import './styles/index.scss';


createRoot( document.getElementById('root')).render (
  <Provider store={store} >
    <App />
  </Provider>
);



