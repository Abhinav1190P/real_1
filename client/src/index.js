import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'
import reducers from './reducers'
const createStr = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
  <Provider store = {createStr(reducers)}>
<App />
  </Provider>

      ,
  document.getElementById('root')
);

