import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Lobster&display=swap" rel="stylesheet"></link>
      
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
