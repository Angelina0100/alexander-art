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

    $("#message").on('click', function(){
        $('.layout').removeClass("visually-hidden");
        $(".popup").removeClass("visually-hidden").addClass('popup__anim');
    });

    $("#send-btn").on('click', function(){
        let input = $('.input--text');
        if(input.val() === '') {
            input.css({'border-color':'#e23030'});
        }
    });
});

function closePopup() {
    $('.popup').removeClass("popup__anim").addClass("visually-hidden");
    $('.layout').addClass("visually-hidden");
}

$(document).keyup(function(e) {
    if (e.key === "Escape") {
        closePopup();
    }
});

$(document).mouseup(function (e){
    let popup = $('.popup');
    if (!popup.is(e.target) && popup.has(e.target).length === 0 && popup.hasClass("popup__anim")) {
        closePopup();
    }
});

