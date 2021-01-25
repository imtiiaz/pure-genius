$(function () {

    "use strict";

    // Pre Loader 
    var loader = document.getElementById("loader");
    window.addEventListener("load", function () {

        loader.style.visibility = "hidden";

    });


    //  slider

    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });


    $('.selection_slider').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 1000,
        speed: 1300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]

});


// scroll top 


$(".scroll_top").on('click', function () {
    $("html,body").animate({
        scrollTop: 0,
    }, 800);
});
$(window).on('scroll', function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 200) {
        $(".scroll_top").fadeIn();
    } else {
        $(".scroll_top").fadeOut();
    }
});

// Closes responsive menu when a scroll link is clicked

$('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});



//Fact Counter + Text Count

if ($('.count-box').length) {

    $('.count-box').appear(function () {
        var $t = $(this),

            n = $t.find(".count-text").attr("data-stop"),

            r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
                countNum: $t.find(".count-text").text()
            }).animate({
                countNum: n
            }, {
                duration: r,
                easing: "linear",
                step: function () {
                    $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function () {
                    $t.find(".count-text").text(this.countNum);
                }
            });
        }

    }, {
        accY: 0
    });

}

});
