/* eslint-disable*/
import React from 'react'
import { useRoutes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import NavBar from './components/navBar/NavBar';
import ForgetPassword from './pages/auth/forgetPassword/ForgetPassword';
import ResetPassword from './pages/auth/resetPassword/ResetPassword';
import Header from './components/header/Header';
import ConfirmOTP from './pages/auth/confirmOTP/ConfirmOTP';

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
    },
    {
      path: '/navbar',
      element: <NavBar/>
    },
    {
      path: '/forgetPassword',
      element: <ForgetPassword/>
    },
    {
      path: '/resetPassword',
      element: <ResetPassword/>
    },
    {
      path: '/confirmOTP',
      element: <ConfirmOTP/>
    },

    {
      path: '/header',
      element: <Header/>
    }
  ]);
  return (
    <>
      {
        routes
      }
  </>
  )
}

export default App;