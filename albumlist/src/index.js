// Importing React, ReactDOM and BrowserRouter
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify'; // Importing toastify for notification
import 'react-toastify/dist/ReactToastify.css';
import './index.css'; // Importing styling
import App from './components/App'; // Importing App component


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>      
      <App /> {/* Rendering the App component */}
      <ToastContainer autoClose ="2000" />
    </React.StrictMode>
  </Router>
);

