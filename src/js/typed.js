//
// typed.js
//

import Typed from 'typed.js';

const toggles = document.querySelectorAll('[data-typed]');

toggles.forEach((toggle) => {
  const elementOptions = toggle.dataset.typed ? JSON.parse(toggle.dataset.typed) : {};

  const defaultOptions = {
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
  };

  const options = {
    ...defaultOptions,
    ...elementOptions,
  };

  new Typed(toggle, options);
});

// Make available globally
window.Typed = Typed;
