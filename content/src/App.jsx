import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import FilmDetail from './components/FilmDetails/FilmDetails';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:id" element={<FilmDetail />} />
      </Routes>
    </Router>
  );
}

export default App
