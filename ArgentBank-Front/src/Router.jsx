import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './pages/Error/ErrorPage';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Transactions from './pages/Transactions/Transactions';

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
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile',
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/transactions',
    element: <Transactions />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/*',
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);

export default Router;
