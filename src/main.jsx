import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Root/Home/Home.jsx';
import Apps from './Components/Apps/Apps.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import AuthLayout from './Components/AuthLayout/AuthLayout.jsx';
import Login from './Components/AuthLayout/Login.jsx';
import Register from './Components/AuthLayout/Register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {index: true,
       Component: Home},
      {path: "apps", Component:Apps},

      // auth layout
      {
        path: "auth",
        Component: AuthLayout,
        children:[
          {
            path: "/auth/login",
            Component: Login,
          },
          {
            path: "/auth/register",
            Component:Register
          },
        ]
      },
      
    ]
  },

  {
    path: "*",
    Component: NotFound
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
