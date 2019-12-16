import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';

const feelings = (state={}, action) => {
  if(action.type === 'FEELINGS') {
    console.log('this is feelings', action.payload);
    return action.payload;
  } 
  return state;
}

const understanding = (state = {}, action) => {
  if (action.type === 'UNDERSTANDING') {
    console.log('this is understanding', action.payload);
    return action.payload;
  }
  return state;
}

const supported = (state = {}, action) => {
  if (action.type === 'SUPPORTED') {
    console.log('this is supported', action.payload);
    return action.payload;
  }
  return state;
}

const comments = (state = {}, action) => {
  if (action.type === 'COMMENTS') {
    console.log('this is comments', action.payload);
    return action.payload;
  }
  return state;
}

const storeInstance = createStore(
  combineReducers({
    feelings,
    understanding,
    supported,
    comments 
  }),  
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
  document.getElementById('root'));

