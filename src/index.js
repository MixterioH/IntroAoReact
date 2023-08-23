import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Globalstyles } from './components-styled/Global_styled';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Globalstyles />
    <App />
  </React.StrictMode>
);

