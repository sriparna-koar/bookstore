// import React from 'react';
// import ReactDOM from 'react-dom/client'

// import App from './App.jsx';
// import './index.css';
// import { BrowserRouter } from 'react-router-dom';
// import { SnackbarProvider } from 'notistack';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <SnackbarProvider>
//       <App />
//     </SnackbarProvider>
//   </BrowserRouter>
// );

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App.jsx';

// createRoot(document.getElementById('root')).render(
//   <Router>
//     <App />
//   </Router>
// );

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
