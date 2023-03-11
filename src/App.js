import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AddBook from './Pages/AddBook/AddBook'
import ViewBook from './Pages/ViewBook/ViewBook';
import EditBook from './Pages/EditBook/EditBook'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-books" element={<AddBook />}></Route>
        <Route path="/view-book" element={<ViewBook />}></Route>
        {/* edit route should be dynamic */}
        <Route path="/edit-book/:id" element={<EditBook />}></Route>
      </Routes>
    </>
  );
}

export default App;
