import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import ErrorPage from './pages/Error/ErrorPage';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signin',
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/app',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/*',
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);

export default Router;
