// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import CreateBook from './pages/CreateBooks';
// import ShowBook from './pages/ShowBook';
// import EditBook from './pages/EditBook';
// import DeleteBook from './pages/DeleteBook';
// import './App.css';

// const App = () => {
//   return (

//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/books/create' element={<CreateBook />} />
//       <Route path='/books/details/:id' element={<ShowBook />} />
//       <Route path='/books/edit/:id' element={<EditBook />} />
//       <Route path='/books/delete/:id' element={<DeleteBook />} />
//     </Routes>
//   );
// };

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import './App.css';

const App = () => {
  return (
    React.createElement(Routes, null,
      React.createElement(Route, { path: '/', element: React.createElement(Home) }),
      React.createElement(Route, { path: '/books/create', element: React.createElement(CreateBook) }),
      React.createElement(Route, { path: '/books/details/:id', element: React.createElement(ShowBook) }),
      React.createElement(Route, { path: '/books/edit/:id', element: React.createElement(EditBook) }),
      React.createElement(Route, { path: '/books/delete/:id', element: React.createElement(DeleteBook) })
    )
  );
};

export default App;
