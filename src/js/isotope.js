//
// isotope.js
//

import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';

const isotopes = document.querySelectorAll('[data-isotope]');
const toggles = document.querySelectorAll('[data-filter]');
const events = ['click'];

window.onload = () => {
  // Init isotope
  isotopes.forEach((isotope) => {
    const instance = Isotope.data(isotope);

    new imagesLoaded(isotope, () => {
      instance.layout();
    });
  });

  // Filter items
  toggles.forEach((toggle) => {
    toggle.addEventListener(events[0], (e) => {
      e.preventDefault();

      const filter = toggle.dataset.filter;
      const target = document.querySelector(toggle.dataset.target);
      const instance = Isotope.data(target);

      instance.arrange({
        filter: filter,
      });
    });
  });
};

// Make available globally
window.Isotope = Isotope;
window.imagesLoaded = imagesLoaded;
