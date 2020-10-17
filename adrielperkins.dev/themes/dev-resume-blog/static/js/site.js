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
