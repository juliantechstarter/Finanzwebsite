import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/start';
import Finanzplaner from './pages/Finanzplaner';
import Finanznews from './pages/Finanznews';
import Unternehmen from './pages/Unternehmen';
import Geschaeftsfuehrung from './pages/Geschaeftsfuehrung';
import StartPlaner from './pages/StartPlaner';
import Navbar from './components/Navbar';
import Footer from './components/footer'; // Footer importieren
import ScrollToTop from './components/ScrollToTop'; // ScrollToTop importieren

function App() {
  const [isLoading, setIsLoading] = useState(true); // Ladezustand

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Ladezustand nach 1 Sekunde aufheben
    }, 1000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* ScrollToTop-Komponente */}
      <Routes>
        {/* Startseite */}
        <Route path="/" element={<Start />} />

        {/* Hauptseiten mit Navbar und Footer */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              {!isLoading && <Footer />} {/* Footer erst nach dem Laden */}
            </>
          }
        />
        <Route
          path="/finanzplaner"
          element={
            <>
              <Navbar />
              <Finanzplaner />
              {!isLoading && <Footer />}
            </>
          }
        />
        <Route
          path="/finanznews"
          element={
            <>
              <Navbar />
              <Finanznews />
              {!isLoading && <Footer />}
            </>
          }
        />
        <Route
          path="/unternehmen"
          element={
            <>
              <Navbar />
              <Unternehmen />
              {!isLoading && <Footer />}
            </>
          }
        />
        <Route
          path="/geschäftsführung"
          element={
            <>
              <Navbar />
              <Geschaeftsfuehrung />
              {!isLoading && <Footer />}
            </>
          }
        />
        <Route
          path="/startplaner"
          element={
            <>
              <Navbar />
              <StartPlaner />
              {!isLoading && <Footer />}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
