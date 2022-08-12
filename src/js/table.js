//
// table.js
//

const tableLinks = document.querySelectorAll('.table-clickable [data-href]');

tableLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    document.location.href = link.dataset.href;
  });
});
