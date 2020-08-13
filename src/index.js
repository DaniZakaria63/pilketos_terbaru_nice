import React from 'react';
import ReactDOM from 'react-dom';
import Template from './layouts/Template';
require ('bootstrap/dist/css/bootstrap.css');
require('./index.css');

ReactDOM.render(
  <React.StrictMode>
      <Template/>
  </React.StrictMode>,
  document.getElementById('root')
);

