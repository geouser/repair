// Global parameters
window.params = {
    widthFull: 750,
    maxRowHeight: 0,
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};



jQuery(document).ready(function($) {

    /*---------------------------
                                  ADD CLASS ON SCROLL
    ---------------------------*/
    $(function() { 
        var $document = $(document),
            $element = $('.menu-button'),
            $element2 = $('header'),
            className = 'hasScrolled';

        $document.scroll(function() {
            $element.toggleClass(className, $document.scrollTop() >= 1);
            $element2.toggleClass(className, $document.scrollTop() >= 1);
        });
    });
      

    /*---------------------------
                                  MENU TOGGLE
    ---------------------------*/
    $('.menu-button').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings('header').toggleClass('active');
        if ($('header').hasClass('active')) {
                $('body, html').css('overflow', 'hidden');
            } else {
                $('body, html').css('overflow', 'visible');
            }
    });



    /*---------------------------
                                  Magnific popup
    ---------------------------*/
    $('.magnific').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',
        modal: false,

        closeBtnInside: true,
        preloader: false,
        
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });


    $('.tabs__item--slider').slick({
        fade: true,
        dots: true,
        arrows: false
    });




    $('.tabsChange li').click(function(){
        var tab = '#' + $(this).attr('href') + '';
        var tabSlider = $(tab).hasClass('.tabs__item');
        var tabs = $(this).parent().siblings().children('.tabs__item');

        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        $(tabs).hide();

        if ($(tab).is('.tabs__item--slider')) {
            $(tabs).slick('unslick');
            $(tab).fadeIn().slick({
                fade: true,
                dots: true,
                arrows: false
            });
        } else {
            $(tab).fadeIn();
        }
    });


    /*---------------------------
                                  Reviews slider popup
    ---------------------------*/
    $('.reviews__slider').slick({
        dots: true,
        slidesToShow: 2,
        arrows: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
        
    });

}); // end file