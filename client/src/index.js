import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import './index.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import AddTransaction from './views/AddTransaction/AddTransaction.js';
import Navbar from "./components/Navbar/Navbar.js"


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
    path:"/add-transaction",
    element:<AddTransaction/>
  },
  {
   path:"/navbar",
   element:<Navbar/>
   
  },
  {
    path:"*",
    element: <h1>404 Not Found</h1>
  },
 
])

root.render(<RouterProvider router={router}/>) ;



