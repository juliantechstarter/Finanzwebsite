import React from "react";
import { motion } from "framer-motion"; // Framer Motion importieren
import "./Home.css";
import advisorImage from "../assets/FINAERA-finanzberatung-berater.jpg";

function Home() {
  const handleButtonClick = (section) => {
    alert(`Du hast ${section} ausgewählt!`);
  };

  return (
    <div className="home-container">
      {/* Textbereich mit Slide-In von links */}
      <motion.div
        className="text-block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Finanzberatung – so einzigartig wie Ihr Leben</h1>
        <p>
          Der Zukunft entspannt entgegengehen: Mit einer guten Finanzplanung
          können Sie Vermögen aufbauen, finanzielle Spielräume für das Alter
          schaffen und sich auf unerwartete Herausforderungen vorbereiten.
        </p>
      </motion.div>

      {/* Bildbereich mit Fade-In von oben */}
      <motion.div
        className="image-block"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={advisorImage} alt="Finanzberater" />
      </motion.div>
    </div>
  );
}

export default Home;
