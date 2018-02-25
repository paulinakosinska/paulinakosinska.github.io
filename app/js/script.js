$(window).scroll(function () {
    if ($('.navbar').offset().top > 60) {
        $('.navbar').addClass('navbar-scrolled');
        $('#navbar-logo').removeClass("hidden");
    } else {
        $('.navbar').removeClass('navbar-scrolled');
        $('#navbar-logo').addClass("hidden");
    }
});

$('#navbarNav').on('show.bs.collapse', function () {
    $('nav').toggleClass("navbar-scrolled");
})

$('.nav-link').on('click', function () {
    $('#navbarNav').collapse('hide');
})

$('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        console.log($('html, body'));
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    } else {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    }
});