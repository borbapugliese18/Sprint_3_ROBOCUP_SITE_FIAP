$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsiveClass:true,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1,   
        },
        769:{
            items:2,
        },
        1189:{
            items:4,
            dots: true
        }
    }
})


