var list = document.querySelector('.main-nav__dropdown');
var link = document.querySelector('.main-nav__link--dropdown');


navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__dropdown--closed')) {
    navMain.classList.remove('main-nav__dropdown--closed');
    navMain.classList.add('main-nav__dropdown--opened');
    navToggle.classList.add('main-nav__link--opened')
  } else {
    navMain.classList.add('main-nav__dropdown--closed');
    navMain.classList.remove('main-nav__dropdown--opened');
    navToggle.classList.remove('main-nav__link--opened');
  }
});
