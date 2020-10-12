// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// navbar menu
$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});


var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    smartBackspace: true,
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1000,
    showCursor: false
});


function arrowFloat () {
    var elem = document.getElementById("scrollArrow");
    var pos = 0;
    var id = setInterval (frame, 10) ;
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            poss++;
            elem.style.bottom = pos + 'px';
        }
    }
}
