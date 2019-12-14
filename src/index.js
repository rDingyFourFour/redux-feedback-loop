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

const storeInstance = createStore(
  combineReducers({
    feelings, 
  }),  
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
  document.getElementById('root'));

