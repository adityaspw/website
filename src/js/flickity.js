//
// flickity.js
//

import Flickity from 'flickity';

const toggles = document.querySelectorAll('[data-toggle="flickity"]');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', function () {
    const slide = parseInt(toggle.dataset.slide);
    const target = document.querySelector(toggle.dataset.target);
    const flickity = Flickity.data(target);

    flickity.selectCell(slide);
  });
});

// Make available globally
window.Flickity = Flickity;
