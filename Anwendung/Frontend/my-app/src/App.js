import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Finanzplaner from './pages/Finanzplaner';
import Finanznews from './pages/Finanznews';
import Unternehmen from './pages/Unternehmen';
import Geschaeftsfuehrung from './pages/Geschaeftsfuehrung';
import Navbar from './components/Navbar';

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
      </Routes>
    </Router>
  );
}

export default App;
