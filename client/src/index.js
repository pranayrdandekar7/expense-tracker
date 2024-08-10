import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import './index.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router= createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/signup",
    element: <Signup/>
  },
  {
    path:"*",
    element: <h1>404 Not Found</h1>
  },
 
])

root.render(<RouterProvider router={router}/>) ;



