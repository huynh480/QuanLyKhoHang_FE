/* eslint-disable*/
import React from 'react'
import { useRoutes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ]);
  return (
    {
      routes
    }
  )
}

export default App;