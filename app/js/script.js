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

AOS.init();

$(window).scroll(function () {
    const titleWraperOffset = $('#title-wraper').offset().top;
    const aboutMeOffset = $('#about-me').offset().top;
    const skillsOffset = $('#skills').offset().top;
    const projectsOffset = $('#projects').offset().top;
    const contactMeOffset = $('#contact-me').offset().top;
    let currentPosition = document.documentElement.scrollTop +1;
    
    $('a[href^="#"]').removeClass("underline-link");
    
    if (currentPosition >= titleWraperOffset && currentPosition <= aboutMeOffset) {
        $('a[href$="#title-wraper"]').addClass("underline-link");
    } else if (currentPosition >= aboutMeOffset && currentPosition <= skillsOffset) {
        $('a[href$="#about-me"]').addClass("underline-link");
    } else if (currentPosition >= skillsOffset && currentPosition <= projectsOffset) {
        $('a[href$="#skills"]').addClass("underline-link");
    }else if (currentPosition >= projectsOffset && currentPosition <= contactMeOffset) {
        $('a[href$="#projects"]').addClass("underline-link");
    } else if (currentPosition >= contactMeOffset) {
        $('a[href$="#contact-me"]').addClass("underline-link");
    }
});