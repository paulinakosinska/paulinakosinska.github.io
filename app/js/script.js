$(window).scroll(function () {
    if ($(".navbar").offset().top > 40) {
        $(".navbar").addClass('navbar-scrolled');
    } else {
        $(".navbar").removeClass('navbar-scrolled');
    }
});