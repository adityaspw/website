//
// features.scss
//

const toggles = document.querySelectorAll('[data-toggle="table-features"]');

toggles.forEach((toggle) => {
  toggle.addEventListener('change', () => {
    const target = toggle.dataset.target;
    const table = document.querySelector(target);

    table.classList.toggle('table-features-alt');
  });
});
