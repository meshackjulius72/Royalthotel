/* nav.js - opens and closes the menu on phones.
   Without JavaScript the links simply stay visible, so nothing breaks. */

// Tell the CSS that JavaScript is running (turns on the collapsed phone menu)
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('.menu-btn');
  var menu   = document.getElementById('site-nav');
  if (!button || !menu) return;

  // Open or close the menu and keep aria-expanded in sync for screen readers
  function setOpen(open) {
    menu.classList.toggle('open', open);
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    button.textContent = open ? 'Close' : 'Menu';
  }

  button.addEventListener('click', function () {
    setOpen(!menu.classList.contains('open'));
  });

  // Close after choosing a link, or when Escape is pressed
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
});
