// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// navbar menu
document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
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