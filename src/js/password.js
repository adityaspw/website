//
// password.js
//

const toggles = document.querySelectorAll('[data-toggle="password"]');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();

    var target = document.querySelector(toggle.getAttribute('href'));
    var type = target.type === 'password' ? 'text' : 'password';

    target.type = type;
  });
});
