$(document).ready(function(){
    $('.cs-hidden').slick({
        slidesToShow:2.5,
        infinite:true,
        autoplay:true,
        autoplaySpeed:1000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class=' ti-arrow-circle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class=' ti-arrow-circle-right' aria-hidden='true'></i></button>"
    });
  });