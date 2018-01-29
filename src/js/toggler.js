var navMain = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.main-nav__toggler');


navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__list--closed')) {
    navMain.classList.remove('main-nav__list--closed');
    navMain.classList.add('main-nav__list--opened');
    navToggle.classList.add('main-nav__toggler--opened')
  } else {
    navMain.classList.add('main-nav__list--closed');
    navMain.classList.remove('main-nav__list--opened');
    navToggle.classList.remove('main-nav__toggler--opened');
  }
});
