import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from "./providers/AuthProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import { initMiddleware, } from 'devise-axios';

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);
