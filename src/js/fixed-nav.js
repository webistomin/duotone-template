window.onscroll = function() {myFunction()};

var nav = document.querySelector('.main-nav');
var sticky = nav.offsetTop + 200;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("main-nav--fixed");
  } else {
    nav.classList.remove("main-nav--fixed");
  }
}
