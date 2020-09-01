jQuery(document).ready(function($){
    $(".homepage-slides").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        navText: [" <i class='fa fa-long-arrow-left'></i> "," <i class='fa fa-long-arrow-right'></i> "],
        autoply: false,
    });
});
