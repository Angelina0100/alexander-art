$(document).ready(function(){
    $(".header__burger").on('click', function(){
        $(this).toggleClass("is-cross");
        $(".header__menu").toggleClass("is-active");
    });

    $(".header__nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $(".header__menu").removeClass("is-active");
        $(".header__burger").removeClass("is-cross");
        $('body,html').animate({scrollTop: top}, 1500);
    });


    // Assign some jquery elements we'll need
    var $swiper = $(".swiper-container");
    var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
    // into a fixed position for animation purposes
    var $bottomSlideContent = null; // Slide content that gets passed between the
    // panning slide stack and the position 'behind'
    // the stack, needed for correct animation style

    var mySwiper = new Swiper(".swiper-container", {
        slideToClickedSlide: true,
        spaceBetween: 1,
        slidesPerView: 3,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            769: {
                slidesPerView: 3
            },
            1920: {
                slidesPerView: 3
            }
        }
    });
});
/*var $owl = $('.owl-carousel');

$owl.children().each( function( index ) {
    $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
    center: true,
    loop: true,
    items: 3
});

$(document).on('click', '.owl-item>div', function() {
    var $speed = 300;  // in ms
    $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});*/
