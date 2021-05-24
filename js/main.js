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
    let parallax =
        document.querySelector('.parallax');

    function ScrollParallax() {
        let scrollTop =
            document.documentElement.scrollTop;
        parallax.style.transform = 'translateY(' + scrollTop * -0.3 + 'px)';
    }
    window.addEventListener('scroll', scrollParallax);
});
