import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './LandingPage/Home.jsx';
import App from './App.jsx'
import './index.css'

const MyApp = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/components",
    element: <App/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={MyApp} />
  </React.StrictMode>,
)
