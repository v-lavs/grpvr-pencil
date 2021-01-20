/**
 *To include js file from libraries write: `//= include ./path-to-file`
 * */



/**
 * CUSTOM SCRIPTS
 **/

$(document).ready(function () {
    /**
     * HEADER SCROLL
     */

    var scrolled;

    function onHeaderScroll() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 60) {
            jQuery(".header").addClass('header_active');
        } else {
            jQuery(".header").removeClass('header_active');
        }
    }

    $(document).on('scroll', function () {
        onHeaderScroll();
    });
    onHeaderScroll();

    /**
     * MOB MENU SCRIPT
     **/

    var nav = $('.main-nav');

    $('.burger').click(function (e) {
        e.preventDefault();
        nav.addClass('open');
        jQuery('.backdrop').fadeIn();
    });

    $('.btn-close, .backdrop').click(function (e) {
        e.preventDefault();
        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });



    // slider

    var advantagesSlider;
    var gymnasticSlider;
    var questionsSlider;

    function slidersInit() {
        if ($(window).width() <= 1040) {
            if (!advantagesSlider) {
                advantagesSlider = new Swiper('#advantagesSlider', {
                    slidesPerView: 2,
                    spaceBetween: 40,
                    breakpoints: {

                        768: {
                            slidesPerView: 2,
                        },
                        200: {
                            slidesPerView: 1
                        }
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.bg-slider-advantages .swiper-button-next',
                        prevEl: '.bg-slider-advantages .swiper-button-prev',
                    },
                });
            }
            if (!gymnasticSlider) {
                gymnasticSlider = new Swiper('#gymnasticSlider', {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                    },
                    navigation: {
                        nextEl: '.navigation-gymnastic-list .swiper-button-next',
                        prevEl: '.navigation-gymnastic-list .swiper-button-prev',
                    },
                });
            }
            if (!questionsSlider) {
                questionsSlider = new Swiper('#questionsSlider', {
                    slidesPerView: 1,
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                    },
                    navigation: {
                        nextEl: '.question-list-wrap .swiper-button-next',
                        prevEl: '.question-list-wrap .swiper-button-prev',
                    },
                });
            }
        } else {
            if (advantagesSlider) {
                advantagesSlider.destroy(true, true);
                advantagesSlider = null;
            }
            if (gymnasticSlider) {
                gymnasticSlider.destroy(true, true);
                gymnasticSlider = null;
            }
            if (questionsSlider) {
                questionsSlider.destroy(true, true);
                questionsSlider = null;
            }
        }
    }

    slidersInit();

    function setEqualHeight() {
        var max_card_height = 0;
        var $advantagesCards = $('.question-list__item');
        $advantagesCards.each(function () {
            if ($(this).height() > max_card_height) {
                max_card_height = $(this).height();
            }
        });
        $advantagesCards.css({minHeight: $(window).width() > 1040 ? max_card_height : 'auto'});
    }

    setEqualHeight();

//SUB-MENU

    $('.sub-menu__toggle').click(function (e) {
        $(this).toggleClass('sub-menu__toggle_active')
    });

//HIDE TEXT
    $('.text-hide .read-more').on('click', function(e) {
        e.preventDefault();
        $(this).siblings().removeClass('hide');
        $(this).hide();
    });


    $(window).on('resize', function () {
        slidersInit();
    });
});


