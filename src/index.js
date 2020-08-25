import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import Template from './layouts/Template';
require('bootstrap/dist/css/bootstrap.css');
require('./index.css');


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Template />
  </Provider>,
  document.getElementById('root')
);

