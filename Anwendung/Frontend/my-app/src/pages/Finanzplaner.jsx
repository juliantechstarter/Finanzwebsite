import React from 'react';
import { motion } from 'framer-motion';
import Login from '../components/Login'; //Pfad zur Login-Komponente
import './Finanzplaner.css';
import finanzplanerImage from '../assets/finanzplaner.jpg';

function Finanzplaner() {
  return (
    <div className="finanzplaner-page">
      <div className="content-wrapper">
        <motion.div
          className="text-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Ineffiziente Planung war gestern</h1>
          <p>
            Sind Ihre Planungs-, Budgetierungs- und Forecasting-Prozesse (PB&F)
            ineffizient, inkonsistent und schleppend? Damit sind Sie nicht
            allein. Unabhängig von der Branche benötigen Unternehmen in der
            Regel 30 Tage oder mehr und mindestens 3 Zyklen, um Jahresbudgets*
            zu genehmigen. Dies verursacht einen hohen Mehraufwand in der
            Finanzabteilung und anderen Geschäftsbereichen. Dabei sind die
            Ergebnisse aufgrund schneller Veränderungen und komplexer Märkte
            häufig unzuverlässig und schnell veraltet.
          </p>
        </motion.div>
        <motion.div
          className="image-section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={finanzplanerImage} alt="Finanzplaner" />
        </motion.div>
      </div>
      <div className="login-wrapper">
        <Login />
      </div>
    </div>
  );
}

export default Finanzplaner;
