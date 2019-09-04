import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './components/App';
import store from './store';
import Socket from './socket/socketHandlerClient';

const { socket } = new Socket();
console.log('SOCKET is: ', socket);

// console.log('Provider is: ', Provider);
// console.log('Store in index is: ', store);
// console.log('Store state in index is: ', store.getState());



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App')
);
