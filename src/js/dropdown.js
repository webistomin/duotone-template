var list = document.querySelector('.main-nav__dropdown');
var link = document.querySelector('.main-nav__link--dropdown');


link.addEventListener('click', function() {
  if (list.classList.contains('main-nav__dropdown--closed')) {
    list.classList.remove('main-nav__dropdown--closed');
    list.classList.add('main-nav__dropdown--opened');
    link.classList.add('main-nav__link--opened')
  } else {
    list.classList.add('main-nav__dropdown--closed');
    list.classList.remove('main-nav__dropdown--opened');
    link.classList.remove('main-nav__link--opened');
  }
});
