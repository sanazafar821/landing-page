jQuery("#carousel").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    responsive: {
        320: {
            items: 1
        },

        600: {
            items: 1
        },

        1024: {
            items: 1
        },

        1366: {
            items: 1
        }
    }
});
jQuery("#carousel2").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: false,
    responsive: {
        320: {
            items: 1
        },
        600: {
            items: 2
        },
        1024: {
            items: 3
        },

        1366: {
            items: 3
        }
    }
});
jQuery("#carousel3").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    dots: false,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        320: {
            items: 1
        },

        600: {
            items: 2
        },

        1024: {
            items: 3
        },

        1366: {
            items: 3
        }
    }
});
jQuery("#carousel4").owlCarousel({
    center: true,
    // stagePadding: 50,
    autoplay: false,
    lazyLoad: true,
    dots: false,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        320: {
            items: 1
        },

        600: {
            items: 3
        },

        1024: {
            items: 5
        },

        1366: {
            items: 5
        },
        1400: {
            items: 5
        }
    }
});
jQuery("#brands").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    dots: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    // nav: true,
    responsive: {
        320: {
            items: 2
        },

        600: {
            items: 4
        },

        1024: {
            items: 6
        },

        1366: {
            items: 6
        },
        1400: {
            items: 6
        }
    }
});