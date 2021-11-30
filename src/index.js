import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/style.css';
import { Provider } from 'react-redux';
import {store} from './state/state.js'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



