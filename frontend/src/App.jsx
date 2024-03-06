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




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Change import here
// import Home from './pages/Home.jsx';
// import CreateBook from './pages/CreateBooks.jsx';
// import ShowBook from './pages/ShowBook.jsx';
// import EditBook from './pages/EditBook.jsx';
// import DeleteBook from './pages/DeleteBook.jsx';
// import './App.css';

// const App = () => {
//   return (
//     <Router> {/* Use Router here */}
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/books/create' element={<CreateBook />} />
//         <Route path='/books/details/:id' element={<ShowBook />} />
//         <Route path='/books/edit/:id' element={<EditBook />} />
//         <Route path='/books/delete/:id' element={<DeleteBook />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios'; // Import Axios
import Home from './pages/Home.jsx';
import CreateBook from './pages/CreateBooks.jsx';
import ShowBook from './pages/ShowBook.jsx';
import EditBook from './pages/EditBook.jsx';
import DeleteBook from './pages/DeleteBook.jsx';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = async (bookData) => {
    try {
      const response = await axios.post('https://bookstore-two-swart.vercel.app', bookData); // Replace 'your-post-url' with your actual POST URL
      console.log(response.data); // Log response data
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route 
          path='/books/create' 
          element={<CreateBook addBook={addBook} />} // Pass addBook function as prop
        />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
      </Routes>
    </Router>
  );
};

export default App;



