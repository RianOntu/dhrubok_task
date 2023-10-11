import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home/Home';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import List from './components/List/List';

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
          },
          {
            path:'/counter',
            element:<Counter></Counter>
          },
          {
            path:'/form',
            element:<Form></Form>
          },
          {
            path:'/list',
            element:<List></List>
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
