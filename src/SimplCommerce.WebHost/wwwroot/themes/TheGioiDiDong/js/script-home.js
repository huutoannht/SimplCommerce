$('.product_home-carousel').owlCarousel({
    nav: false,
    dots: false,
    margin: 10,
    responsive:{
        0:{
            loop: true,
            items: 2,
            margin: 5,
            autoplay: true
        },
        480:{
            autoplay: true,
            items: 2,
            margin: 10,
        },
        768: {
            items: 3,
        }
    }
})

$('.brand-slide .owl-brand').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 5,
    nav: false,
    dots: false,
    responsive:{
        0:{
            items: 3
        },
        641:{
            items: 4
        },
        992:{
            items: 5
        },
        1200:{
            items: 7
        }
    }
});

$('.extra-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText : ["<span class='arrow'></span>","<span class='arrow'></span>"],
    dots: false,
    responsive:{
        0:{
            items: 2
        },
        480:{
            items: 3
        },
        992:{
            items: 4
        },
        1200:{
            items: 5
        }
    }
});
