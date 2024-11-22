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
        {/* Route für Landing Page */}
        <Route path="/" element={<Start />} />
        
        {/* Routen für die Seiten mit Navbar und Footer */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/finanzplaner"
          element={
            <>
              <Navbar />
              <Finanzplaner />
              <Footer />
            </>
          }
        />
        <Route
          path="/finanznews"
          element={
            <>
              <Navbar />
              <Finanznews />
              <Footer />
            </>
          }
        />
        <Route
          path="/unternehmen"
          element={
            <>
              <Navbar />
              <Unternehmen />
              <Footer />
            </>
          }
        />
        <Route
          path="/geschäftsführung"
          element={
            <>
              <Navbar />
              <Geschaeftsfuehrung />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
