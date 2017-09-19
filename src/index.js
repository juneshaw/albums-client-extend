import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/app';
import reducers from './reducers';
import rootReducer from './reducers/index';
import dataService from './services/data-service.js'

let store = createStore(rootReducer, {}, compose(applyMiddleware(dataService), window.devToolsExtension
	? window.devToolsExtension() : f => f))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));


store.dispatch({type: 'GET_ALBUM_DATA'})
