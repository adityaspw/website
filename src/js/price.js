//
// price.js
//

import { CountUp } from 'countup.js';

const toggles = document.querySelectorAll('[data-toggle="price"]');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const target = toggle.dataset.target;
    const targetEl = document.querySelector(target);

    const from = targetEl.innerHTML;
    const to = toggle.dataset.value;

    const countUp = new CountUp(targetEl, to, { startVal: from });
    countUp.error ? console.error(countUp.error) : countUp.start();
  });
});
