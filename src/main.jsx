import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
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


const styles = {
	global: (props) => ({
		body: {
			
			color: mode("#dddd")(props),
		},
	}),
};

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config, styles });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
