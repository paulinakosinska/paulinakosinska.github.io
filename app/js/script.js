$(window).scroll(function () {
    if ($(".navbar").offset().top > 60) {
        $(".navbar").addClass('navbar-scrolled');
        $("#navbar-logo").css("display", "inline");
    } else {
        $(".navbar").removeClass('navbar-scrolled');
        $("#navbar-logo").css("display", "none");
    }
});
