$(function(){
    $(".owl-carousel").owlCarousel({
        margin:30,
        nav:true,
        navText: ["<img class='owl-prev-image' src='img/slider-images/arrow-left.svg'>","<img class='owl-next-image' src='img/slider-images/arrow-right.svg'>"],
        loop:true,
        autoWidth:true,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:3,
            }
        }
    });
    // Определение ширины экрана
    let screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        // если экран меньше 767
      } else {
        new WOW().init();
      };
    //   Phone-input validate
      $(".phone-validate").mask("+7 (999) 999-99-99");
    });