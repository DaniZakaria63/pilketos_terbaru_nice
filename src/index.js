import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './client/App';
import Reducer from "./store/reducer";
import PreAppServer from './admin/PreApp';

require('bootstrap/dist/css/bootstrap.css');
require('./index.css');


ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <Router>
        <Route exact path={'/'}>
          <App />
        </Route>
        <Route path='/admin'>
          <PreAppServer />
        </Route>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
