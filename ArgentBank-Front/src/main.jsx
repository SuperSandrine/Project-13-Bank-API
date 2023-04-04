import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { store } from './redux/redux';
import { store } from './redux/store';

import Router from './Router';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
    {/* </AuthProvider> */}
  </React.StrictMode>
);
