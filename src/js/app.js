$(document).ready(function () {
    // Note: This is not being used yet, and hasn't been minified

    var menu = $('.sub-nav');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.sub-nav').addClass('sticky');
        } else {
            $('.sub-nav').removeClass('sticky');
        }
    }
    document.onscroll = scroll;
});