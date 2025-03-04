import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";
import advisorImage from "../assets/FINAERA-finanzberatung-berater.jpg";
import vorsorgeImage from "../assets/vorsorge_2.jpg";
import Spacer from "../components/Spacer";
function Home() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Wie viel Geld benötige ich im Alter?",
      content:
        "Der persönliche Geldbedarf im Alter ist von Person zu Person verschieden und wird deshalb individuell ermittelt. Momentaner Lebensstil, laufende Ausgaben und finanzielle Ziele sind nur einige der entscheidenden Faktoren. Eine detaillierte Betrachtung hilft, um mit möglichst realistischen Annahmen für den Ruhestand zu planen. Gern spielen wir für Sie unterschiedliche Szenarien mit professionellen Tools durch, indem wir auf mögliche Veränderungen bei Ihren Einnahmen und Ausgaben eingehen.",
    },
    {
      title: "Was sind die drei Säulen der Altersvorsorge?",
      content:
        "Bei der Altersvorsorge wird oft von drei Säulen oder Schichten gesprochen. Gemeint sind damit die gesetzliche Versorgung inkl. Basisrenten, die betriebliche Altersversorgung und die private Vorsorge. Ob für Selbständige oder Angestellte: Wichtig ist, dass die drei Säulen sinnvoll kombiniert werden, um steuerliche Gesichtspunkte und staatliche Förderungen optimal zu berücksichtigen.",
    },
    {
      title: "Welche Produkte sind für meine Altersvorsorge ideal?",
      content:
        "Zunächst müssen wichtige Punkte geklärt werden: Wünschen Sie eine lebenslange Rentenzahlung? Wie flexibel soll die Vorsorge fürs Alter sein? Möchten Sie eine Hartz IV-, Insolvenz- oder Pfändungssicherheit mit einbinden? Häufig ist bei der Produktauswahl eine gute Mischung sinnvoll: z. B. mit Investmentfonds, Versicherungslösungen und Immobilien. Es lohnt sich, möglichst früh zu beginnen, um den Zinseszinseffekt ideal auszunutzen.",
    },
  ];

  return (
    <>
      {/* home Section */}
      <div className="home-container">
        {/* Textbereich mit Slide-In von links */}
        <motion.div
          className="text-block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h4>so einzigartig wie Ihr Leben</h4>
          <h1>FINANZBERATUNG </h1>
           
          
           <p> Der Zukunft entspannt entgegengehen: Mit einer guten Finanzplanung können </p>
           <p>Sie Vermögen aufbauen, finanzielle Spielräume für das Alter schaffen und </p>
           <p>sich auf unerwartete Herausforderungen vorbereiten.</p>
          
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

      {/* Content Section */}
      <div className="content-section">
  <h2>Gute Antworten für jeden Lebensabschnitt</h2>
  <div className="content-cards">
    <div className="content-card">
      <img src={require("../assets/av1.jpg")} alt="Best Ager" />
      <p>20. Oktober 2024</p>
      <h3>Altersvorsorge für Best Ager</h3>
      <p>
        Man nennt sie nicht von ungefähr „die besten Jahre“ – die Zeit um
        die Fünfzig herum. Denn dann ist vieles schon erreicht –
        persönlich wie finanziell. Und die Versuchung ist groß, das Leben
        auf „Entspannungsmodus“ zu stellen. Doch das wäre das falsche
        Signal. Besonders für die Altersvorsorge.
      </p>
      <button>Mehr erfahren</button>
    </div>
    <div className="content-card">
      <img src={require("../assets/av2.jpg")} alt="Ruhestand" />
      <p>3. November 2024</p>
      <h3>Altersvorsorge kurz vor dem Ruhestand</h3>
      <p>
        Endlich mehr Zeit haben für Familie und Freunde, Hobbys pflegen
        und verreisen: Viele Menschen haben ganz genaue Vorstellungen für
        die Zeit nach der Berufstätigkeit. Damit dieser Lebensabschnitt
        so schön wird, wie erhofft, bedarf es einer guten Planung – und
        der Ruhestand kann kommen.
      </p>
      <button>Mehr erfahren</button>
    </div>
    <div className="content-card">
      <img src={require("../assets/av3.jpg")} alt="Junge Menschen" />
      <p>11. Oktober 2024</p>
      <h3>Altersvorsorge für junge Menschen</h3>
      <p>
        Wenn Menschen jung sind, liegt das Alter gedanklich in weiter
        Ferne. In dieser Zeit des „Durchstartens“ bleibt die Planung der
        Altersvorsorge leicht auf der Strecke. Dabei macht ein früher
        Einstieg Sinn: Er senkt den Kapitaleinsatz und schafft Optionen.
      </p>
      <button>Mehr erfahren</button>
    </div>
  </div>
</div>


      {/* Vorsorge Section */}
      <section id="vorsorge" className="vorsorge-section"></section>
      <section className="vorsorge-section">
        <div className="accordion-container">
          <h2 className="vorsorge-title">VORSORGE</h2>
          <p>
            Wer rechtzeitig für die Zukunft vorsorgt, kann sich auch im Alter
            die Lebensqualität bewahren.
          </p>
          <div className="accordion">
            {accordionItems.map((item, index) => (
              <div
                key={index}
                className={`accordion-item ${
                  expanded === index ? "expanded" : ""
                }`}
              >
                <div
                  className="accordion-header"
                  onClick={() => toggleExpand(index)}
                >
                  <span>{`0${index + 1}`}</span>
                  <h3>{item.title}</h3>
                  <div
                    className={`accordion-arrow ${
                      expanded === index ? "up" : "down"
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {expanded === index && (
                    <motion.div
                      className="accordion-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        <img className="vorsorge-image" src={vorsorgeImage} alt="Vorsorge" />
      </section>

{/* Absicherung Section */}
<section id="absicherung" className="absicherung-section"></section>
<section className="absicherung-section">
  <div className="absicherung-content">
    
    <div className="absicherung-text">
      <h2>Einkommen absichern</h2>
      <p>
        Ihr gewohnter Lebensstandard ist vor allem von einer Sache abhängig: Ihrem Einkommen. 
        Doch was passiert, wenn das Leben eine unerwartete Wendung nimmt und diese wichtige Lebensgrundlage wegbricht? 
        Für diesen Fall gibt es Versicherungen, die die finanziellen Folgen auffangen und dadurch Sicherheit für Sie und Ihre Angehörigen bieten.
      </p>
      <img 
      src={require("../assets/absicherung.jpg")} 
      alt="Einkommen absichern" 
      className="absicherung-image"
    />
    </div>
  </div>
</section>




      {/* Spacer */}
      <Spacer height="200px" />
    </>
  );
}

export default Home;
