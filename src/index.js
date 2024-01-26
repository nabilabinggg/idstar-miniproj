import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home/Home';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Menus from './Menus/Menus';
import News from './News/News';
import LargeOrders from './Large_Orders/Large_Orders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menus",
    element: <Menus />,
  },
  {
    path: "/news-v1",
    element: <News />,
  },
  {
    path: "/large-orders/create",
    element: <LargeOrders />,
  },
  {
    path: "/accounts/login",
    element: <Home />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
