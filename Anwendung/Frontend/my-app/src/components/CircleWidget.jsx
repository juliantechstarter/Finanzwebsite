import React, { useState } from 'react';
import './CircleWidget.css';

function CircleWidget() {
  const [selected, setSelected] = useState('');

  const handleHover = (section) => {
    setSelected(section);
  };

  return (
    <div className="circle-widget">
      <div className={`segment absicherung ${selected === 'absicherung' ? 'active' : ''}`} onMouseEnter={() => handleHover('absicherung')}>Absicherung</div>
      <div className={`segment vermögen ${selected === 'vermögen' ? 'active' : ''}`} onMouseEnter={() => handleHover('vermögen')}>Vermögen</div>
      <div className={`segment vorsorge ${selected === 'vorsorge' ? 'active' : ''}`} onMouseEnter={() => handleHover('vorsorge')}>Vorsorge</div>
      <div className={`segment immobilie ${selected === 'immobilie' ? 'active' : ''}`} onMouseEnter={() => handleHover('immobilie')}>Immobilie</div>
    </div>
  );
}

export default CircleWidget;
