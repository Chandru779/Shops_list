import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import {createStore} from 'redux';
import shopApp from './redux/index'

const stores = createStore(shopApp);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores}>
    <App />
    </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

