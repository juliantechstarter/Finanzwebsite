/// Datei: App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Finanzplaner from './pages/Finanzplaner';
import Finanznews from './pages/Finanznews';
import Unternehmen from './pages/Unternehmen';
import Geschaeftsfuehrung from './pages/Geschaeftsfuehrung';
import StartPlaner from './pages/StartPlaner'; // StartPlaner importieren
import Navbar from './components/Navbar';
import Footer from './components/footer'; // Footer importieren

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/finanzplaner" element={<Finanzplaner />} />
        <Route path="/finanznews" element={<Finanznews />} />
        <Route path="/unternehmen" element={<Unternehmen />} />
        <Route path="/geschäftsführung" element={<Geschaeftsfuehrung />} />
        <Route path="/startplaner" element={<StartPlaner />} /> {/* StartPlaner Route hinzufügen */}
      </Routes>
      <Footer /> {/* Footer hinzufügen */}
    </Router>
  );
}

export default App;