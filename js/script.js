$(document).ready(function(){

    $('.slider-active').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });

    // ====Testimonail Slider

    $('.testimonial-slider').owlCarousel({
        loop: true,
        nav: false,
        margin: 25,
        dots: true,
        dotsEach: 2,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });
})
// testimonial-slider