import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Home from './component/pages/Home/Home.jsx';
import ErrorPage from './errorpage/ErrorPage.jsx';
import './index.css';

const router = createBrowserRouter ([

  {
    path: "/",
    element: <App />,
    errorElement : <ErrorPage />,
    children:[
      {
        path : "/",
        element : <Home />
    
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
