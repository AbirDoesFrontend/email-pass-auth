import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main';
import BootstrapLogIn from './components/BootstrapLogIn/BootstrapLogIn';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Main />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : 'register-bs',
        element : <BootstrapLogIn />
      },
      {
        path : 'login',
        element : <Login />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
