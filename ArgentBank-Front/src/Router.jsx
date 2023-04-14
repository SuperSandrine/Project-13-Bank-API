import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './pages/Error/ErrorPage';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Transactions from './pages/Transactions/Transactions';

const createRoute = (path, element) => ({
  path,
  element,
  errorElement: <ErrorPage />,
});

const Router = createBrowserRouter([
  createRoute('/', <Home />),
  createRoute('/home', <Home />),
  createRoute('/login', <Login />),
  createRoute('/profile', <Profile />),
  createRoute('/transactions', <Transactions />),
  createRoute('/*', <ErrorPage />),
]);

export default Router;
