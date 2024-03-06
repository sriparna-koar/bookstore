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
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Change import here
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import './App.css';

const App = () => {
  return (
    <Router> {/* Use Router here */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
      </Routes>
    </Router>
  );
};

export default App;
