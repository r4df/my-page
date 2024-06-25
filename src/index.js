import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

//<----- Route ----->
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
const router = createHashRouter([
  {
    path:'/',
    element: <Home />,
    errorElement: <div>Error!</div>
  },
  {
    path:'/About',
    element:<About />
  },
  {
    path:'/Contact',
    element:<Contact />
  }
  
])
//<----------------->


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);