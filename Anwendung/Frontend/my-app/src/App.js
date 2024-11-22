import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/start'; // Importiere die neue Landing Page
import Finanzplaner from './pages/Finanzplaner';
import Finanznews from './pages/Finanznews';
import Unternehmen from './pages/Unternehmen';
import Geschaeftsfuehrung from './pages/Geschaeftsfuehrung';
import Navbar from './components/Navbar';
import Footer from './components/footer'; // Footer importieren

function App() {
  return (
    <Router>
      <Routes>
        {/* Route für Landing Page ohne Navbar und Footer */}
        <Route path="/" element={<Start />} />
        
        {/* Routen mit Navbar und Footer */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/finanzplaner" element={<Finanzplaner />} />
                <Route path="/finanznews" element={<Finanznews />} />
                <Route path="/unternehmen" element={<Unternehmen />} />
                <Route path="/geschäftsführung" element={<Geschaeftsfuehrung />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
