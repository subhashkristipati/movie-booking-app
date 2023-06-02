import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<ShowList />} />
          <Route path="/show/:id" element={<ShowDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
