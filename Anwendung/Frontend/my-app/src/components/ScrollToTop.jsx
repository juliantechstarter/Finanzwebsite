import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrollt die Seite beim Routenwechsel nach oben
  }, [pathname]);

  return null; // Keine visuelle Ausgabe
}

export default ScrollToTop;
