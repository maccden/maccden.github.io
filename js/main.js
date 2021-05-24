$(document).ready(function() {
    var altura = $('.menu').offset().top;
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > altura) {
            $('.menu').removeClass('menu')
                .addClass('menu-fixed')
        } else {
            $('.menu-fixed').removeClass('menu-fixed')
                .addClass('menu');
        }
    })
});
