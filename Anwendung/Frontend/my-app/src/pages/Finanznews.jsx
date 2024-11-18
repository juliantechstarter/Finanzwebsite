import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Finanznews.css";
import finanznews from "../assets/finanznews.jpg";

function Finanznews() {
  const [articles, setArticles] = useState([]);

  // Funktion zum Abrufen der Finanznews von der API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=finanz&apiKey=100f8c2f9ac24a46b4163922a10f3344`
        );
        const data = await response.json();
        setArticles(data.articles.slice(0, 5)); // Zeige maximal 5 Artikel an
      } catch (error) {
        console.error("Fehler beim Abrufen der Finanznews:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="finanznews-page">
      <div className="content-wrapper">
        {/* Text-Sektion mit Slide-In von links */}
        <motion.div
          className="text-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Finanznews</h1>
          <p>
            Sie möchten tiefer in ein bestimmtes Finanzthema eintauchen? Hier finden Sie wertvolle Beiträge,
            die Ihnen hilfreiches Wissen und spannende Hintergründe liefern.
          </p>
        </motion.div>

        {/* Bild-Sektion mit Fade-In von oben */}
        <motion.div
          className="image-section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={finanznews} alt="Finanznews" />
        </motion.div>
      </div>

      {/* Neuer Bereich für Finanznews-Artikel */}
      <div className="news-section">
        <h2>Aktuelle Finanznachrichten</h2>
        <div className="news-list">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <div key={index} className="news-item">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Mehr lesen
                </a>
              </div>
            ))
          ) : (
            <p>Keine Finanznews verfügbar.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Finanznews;
