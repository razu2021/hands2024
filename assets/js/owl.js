
$(document).ready(function(){
    $(".container_slider").owlCarousel({
        autoplay:true,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
  });
// index service slider end here 
$(document).ready(function(){
    $(".meet_volunteers").owlCarousel({
        autoplay:true,
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:6
            }
        }
    });
  });
// index service slider end here 




// zoom banner child protection 
$(document).ready(function(){
    $(".index_banner_slider").owlCarousel({
        items:1,
        autoplay:true,
        loop:true,
       // nav: false,
        marginbottom:0,
       // navText: ["<span class='prev'>  <  </span>", "<span class='next'> > </span>"],
        responsive:{
            0:{
                items:1,
                nav: false,
            },
            600:{
                items:1,
                nav: false,
            },
            1000:{
                items:1,
                dots:false,
            }
        }
    });
  });