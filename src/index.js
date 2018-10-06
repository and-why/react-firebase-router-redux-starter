import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './components/App';

import { firebase } from './firebase';
import { Provider } from 'react-redux';
import { login } from './actions';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

firebase.auth.onAuthStateChanged(user => {
  console.log('store: ', store.getState().uid);
  if (user) {
    const uid = user.uid;
    store.dispatch(login(uid));
  }
});

serviceWorker.unregister();
