$(function () {
    $('.btn-bn').click(function () {
        $('.btn-bn').addClass('active');
        $('.btn-en').removeClass('active');
    });
    $('.btn-en').click(function () {
        $('.btn-en').addClass('active');
        $('.btn-bn').removeClass('active');
    });

    $('.nav_items_bar').click(function () {
        $('.mobile_nav').toggleClass('d-none');
    });

    var slider_main_carousel = $('.slider_main_carousel').owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $(".slider_main_prev").click(function () {

        slider_main_carousel.trigger('prev.owl.carousel');
    });

    $(".slider_main_next").click(function () {
        slider_main_carousel.trigger('next.owl.carousel');
    });


    var work_permit_visa_carousel = $('.work_permit_visa_carousel').owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    $(".nav_items_sub a").each(function () {
        var text = $(this).text();
        text = text.replace(/\s/g, '');
        var text_length = text.length;
        if (text_length == 0) {
            $(this).remove();
        }
    });
});

$(".work_permit_visa_prev").click(function () {

    work_permit_visa_carousel.trigger('prev.owl.carousel');
});

$(".work_permit_visa_next").click(function () {
    work_permit_visa_carousel.trigger('next.owl.carousel');
});


var student_visa_carousel = $('.student_visa_carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

$(".student_visa_prev").click(function () {

    student_visa_carousel.trigger('prev.owl.carousel');
});

$(".student_visa_next").click(function () {
    student_visa_carousel.trigger('next.owl.carousel');
});

var tourist_or_visit_carousel = $('.tourist_or_visit_carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

$(".tourist_or_visit_prev").click(function () {

    tourist_or_visit_carousel.trigger('prev.owl.carousel');
});

$(".tourist_or_visit_next").click(function () {
    tourist_or_visit_carousel.trigger('next.owl.carousel');
});
var business_visa_carousel = $('.business_visa_carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

$(".business_visa_prev").click(function () {

    business_visa_carousel.trigger('prev.owl.carousel');
});


$(".business_visa_next").click(function () {
    business_visa_carousel.trigger('next.owl.carousel');
});
var others_carousel = $('.others_carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

$(".others_prev").click(function () {

    others_carousel.trigger('prev.owl.carousel');
});


$(".others_next").click(function () {
    others_carousel.trigger('next.owl.carousel');
});

$(".nav_item_about").click(function () {
    $(".about").toggleClass('d-none');
});

$(".nav_item_packages").click(function () {
    $(".packages").toggleClass('d-none');
});

$(".nav_item_gallery").click(function () {
    $(".gallery").toggleClass('d-none');
});

$(document).click(function (e) {
    if (!$(e.target).hasClass('nav_item_dropdown')) {
        $('.nav_items_sub').addClass('d-none');
    }
});
