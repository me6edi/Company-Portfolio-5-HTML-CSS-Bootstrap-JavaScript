jQuery(document).ready(function($){
    $(".homepage-slides").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        navText: [" <i class='fa fa-long-arrow-left'></i> "," <i class='fa fa-long-arrow-right'></i> "],
        autoply: false,
    });

    $(".team-list").owlCarousel({
      items: 3,
      margin: 30,
      nav: false,
      dots: true,
      autoply: true,
  });

    $("#web-design-skillbar").circleProgress({
        value: 0.9,
        size: 270,
        thickness: 3,
        fill: '#22babf',
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skill-count-no').html(Math.round(90 * progress) + '<i>%</i>');
      });

      $("#graphic-design-skillbar").circleProgress({
        value: 0.8,
        size: 270,
        thickness: 3,
        fill: '#22babf',
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skill-count-no').html(Math.round(95 * progress) + '<i>%</i>');
      });


      $("#digital-marketing-skillbar").circleProgress({
        value: 0.7,
        size: 270,
        thickness: 3,
        fill: '#22babf',
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skill-count-no').html(Math.round(84 * progress) + '<i>%</i>');
      });
      
});
