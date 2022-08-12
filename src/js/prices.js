//
// prices.js
//

import { CountUp } from 'countup.js';

const toggles = document.querySelectorAll('[data-toggle="prices"]');

toggles.forEach((toggle) => {
  toggle.addEventListener('change', () => {
    const target = toggle.dataset.target;
    const targetEl = document.querySelectorAll(target);

    const isChecked = toggle.checked;

    targetEl.forEach((el) => {
      const minValue = el.dataset.minValue;
      const maxValue = el.dataset.maxValue;

      const from = el.innerHTML;
      const to = isChecked ? maxValue : minValue;

      const countUp = new CountUp(el, to, { startVal: from });
      countUp.error ? console.error(countUp.error) : countUp.start();
    });
  });
});
