import React from "react";
import "./Finanznews.css";
import finanznews from "../assets/finanznews.jpg";

function Finanznews() {
  return (
    <div className="finanznews-page">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>Finanznews</h1>
          <p>
            Sie möchten tiefer in ein bestimmtes Finanzthema eintauchen? Hier finden Sie wertvolle Beiträge, 
            die Ihnen hilfreiches Wissen und spannende Hintergründe liefern.
          </p>
        </div>
        <div className="image-section">
          <img src={finanznews} alt="Finanznews" />
        </div>
      </div>
    </div>
  );
}

export default Finanznews;
