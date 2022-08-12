//
// navbar-reveal.js
//

const navbarReveal = document.querySelectorAll('.navbar-reveal');
const windowEvents = ['load', 'scroll'];

let windowScroll = window.pageYOffset;

navbarReveal.forEach((navbar) => {
  windowEvents.forEach((e) => {
    window.addEventListener(e, () => {
      const currentScroll = window.pageYOffset;
      const navbarOffset = windowScroll < currentScroll && currentScroll > 0 ? '-100%' : '0';
      const navbarCollapse = navbar.querySelector('.navbar-collapse');

      if (!navbarCollapse.classList.contains('show')) {
        navbar.style.transform = `translateY(${navbarOffset})`;
      }

      windowScroll = currentScroll;
    });
  });
});
