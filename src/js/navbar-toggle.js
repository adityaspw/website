//
// navbar-toggle.js
//

const navbars = document.querySelectorAll('.navbar');
const windowEvents = ['load', 'scroll'];
const collapseEvents = ['show.bs.collapse', 'hidden.bs.collapse'];

function makeNavbarLight(navbar) {
  navbar.classList.remove('navbar-dark');
  navbar.classList.add('navbar-light');

  lightenBackground(navbar);
}

function makeNavbarDark(navbar) {
  navbar.classList.remove('navbar-light');
  navbar.classList.add('navbar-dark');

  resetBackground(navbar);
}

function lightenBackground(navbar) {
  navbar.style.boxShadow = 'inset 1000px 1000px 1000px white';
}

function resetBackground(navbar) {
  navbar.style.boxShadow = '';
}

function toggleNavbar(e, navbar, isLight, isTogglable, collapse) {
  const scrollTop = window.pageYOffset;
  const isCollapsed = collapse.classList.contains('show');

  if (e === 'show.bs.collapse') {
    makeNavbarLight(navbar);
  }

  if (e === 'hidden.bs.collapse' && isLight) {
    resetBackground(navbar);
  }

  if (e === 'hidden.bs.collapse' && ((!isTogglable && !isLight) || (isTogglable && !scrollTop))) {
    makeNavbarDark(navbar);
  }

  if ((e === 'load' || e === 'scroll') && isTogglable && !isCollapsed) {
    scrollTop ? makeNavbarLight(navbar) : makeNavbarDark(navbar);
  }
}

navbars.forEach((navbar) => {
  const collapse = navbar.querySelector('.navbar-collapse');
  const isLight = navbar.classList.contains('navbar-light');
  const isTogglable = navbar.classList.contains('navbar-togglable');

  windowEvents.forEach((e) => {
    window.addEventListener(e, () => {
      toggleNavbar(e, navbar, isLight, isTogglable, collapse);
    });
  });

  collapseEvents.forEach((e) => {
    collapse.addEventListener(e, () => {
      toggleNavbar(e, navbar, isLight, isTogglable, collapse);
    });
  });
});
