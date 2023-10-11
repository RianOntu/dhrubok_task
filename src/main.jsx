import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        children:[
          {
            path:'/',
            element: <p>Welcome</p>
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
