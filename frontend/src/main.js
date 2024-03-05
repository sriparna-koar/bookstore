// import React from 'react';
// import { createRoot } from 'react-dom/client';

// import App from './App.jsx';
// import './index.css';
// import { BrowserRouter } from 'react-router-dom';
// import { SnackbarProvider } from 'notistack';

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <SnackbarProvider>
//       <App />
//     </SnackbarProvider>
//   </BrowserRouter>
// );


import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx'; // Make sure the file extension matches the actual file type
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

createRoot(document.getElementById('root')).render(
  React.createElement(BrowserRouter, null,
    React.createElement(SnackbarProvider, null,
      React.createElement(App, null)
    )
  )
);
