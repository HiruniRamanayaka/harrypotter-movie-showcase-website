import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import FilmDetail from './components/FilmDetails/FilmDetails';
import Footer from './components/Footer/Footer'

function App() {

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film/:id" element={<FilmDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
