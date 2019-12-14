import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './components/App/App';




const storeInstance = createStore(
  () => {
    console.log('store instance'); 
  },
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
  document.getElementById('root'));

