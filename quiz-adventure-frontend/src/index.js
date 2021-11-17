import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import theme from "./theme.js"

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root')
);

reportWebVitals();
