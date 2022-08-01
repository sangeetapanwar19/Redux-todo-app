import React from 'react';
import App from './App';
import ReactDom from 'react-dom/client';
import store from './store';
import {Provider} from 'react-redux';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);

//ServiceWorker.unregister();