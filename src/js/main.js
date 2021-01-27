/**
 *To include js file from libraries write: `//= include ./path-to-file`
 * */
//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ../lib/waypoints/index.js

/**
 * CUSTOM SCRIPTS
 **/

$(document).ready(function () {
    // HEADER SCROLL


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


    // MOB MENU SCRIPT

    var nav = $('.header__nav');

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


    // SLIDERS

    var navSlider;
    var aboutGerpevirSlider;
    var advantagesSlider;

    //stage-slider
    const stageSliderSpeed = 500;

    function setActiveDot(stageSliderContent) {
        const content = $(stageSliderContent.slides[stageSliderContent.realIndex]).find('.slider-content__text-wrap').html();
        const contentWrapEL = $('#stagesSlideContent .slider-content__text-wrap');

        contentWrapEL.removeClass('anim-in');
        contentWrapEL.addClass('anim-out');

        setTimeout(() => {
            contentWrapEL.html(content);
            contentWrapEL.addClass('anim-in');
            contentWrapEL.removeClass('anim-out');
        }, stageSliderSpeed);

        const dotWidth = 100 / stageSliderContent.slides.length;
        const handlePosition = dotWidth * (stageSliderContent.realIndex) + dotWidth / 2 + '%';
        $('.slider-stage__progress-track').css({width: handlePosition});
        $('.slider-stage__handle').css({left: handlePosition});

        $('.slider-stage__pagination-item').removeClass('active');
        $('.slider-stage__pagination-item').eq(stageSliderContent.realIndex).addClass('active');
    }

    const stagesSlider = new Swiper('#stagesSlider', {
        speed: stageSliderSpeed,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function () {
                setActiveDot(this);
            },
            slideChange: function () {
                setActiveDot(this);
            },

        },
    });

    const stageSliderContent = $('#stagesSlideContent');


    $('.slider-stage__pagination-link').click(function (e) {
        e.preventDefault();
        stagesSlider.slideTo($(this).parent().index())
    });

    //block-btn slider

    var blockBtnSlider = new Swiper('#blockBtnSlider', {
        slidesPerView: 2,
        spaceBetween: 80,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            540: {
                spaceBetween: 40,
            },
            0: {
                spaceBetween: 40,
            }
        }
    });


    function slidersInit() {
        if ($(window).width() <= 840) {
            if (!navSlider) {
                navSlider = new Swiper('#navSlider', {
                    slidesPerView: 3,
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.main-nav .swiper-button-next',
                        prevEl: '.main-nav .swiper-button-prev',
                    },
                });
            }
            if (!aboutGerpevirSlider) {
                aboutGerpevirSlider = new Swiper('#aboutGerpevirSlider', {
                    spaceBetween: 30,
                    slidesPerView: 'auto',
                    visibilityFullFit: true,
                    autoResize: false,
                    breakpoints: {
                        320: {
                            slidesPerView: 'auto',
                            visibilityFullFit: true,
                            autoResize: false,
                        }
                    },
                    pagination: {
                        el: '.wrap-section-slider .swiper-pagination',
                        clickable: true,
                    },
                });
            }

            if (!advantagesSlider) {
                advantagesSlider = new Swiper('#advantagesSlider', {
                    spaceBetween: 30,
                    slidesPerView: 'auto',
                    visibilityFullFit: true,
                    autoResize: false,
                    breakpoints: {
                        320: {
                            slidesPerView: 'auto',
                            visibilityFullFit: true,
                            autoResize: false,
                        }
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            }
        } else {
            if (navSlider) {
                navSlider.destroy(true, true);
                navSlider = null;
            }
            if (aboutGerpevirSlider) {
                aboutGerpevirSlider.destroy(true, true);
                aboutGerpevirSlider = null;
            }

            if (advantagesSlider) {
                advantagesSlider.destroy(true, true);
                advantagesSlider = null;
            }
        }
    }

    slidersInit();

//SUB-MENU

    $('.sub-menu__toggle').click(function (e) {
        $(this).toggleClass('sub-menu__toggle_active')
    });

//HIDE TEXT
    $('.text-hide .open-up').on('click', function (e) {
        e.preventDefault();
        $('.text-hide .mob-hide').removeClass('mob-hide');
        $(this).hide();
    });

    // PARALAX
    $('.mouse-parallax').on('mousemove', (e) => {
        const x = e.clientX / $(window).width();
        const y = e.clientY / $(window).height();
        const $activeSection = $(e.currentTarget);

        $activeSection.find('.mouse-parallax__bg').css(
            'transform',
            'translate(-' + x * 50 + 'px, -' + y * 40 + 'px)'
        );
        $activeSection.find('.mouse-parallax__bg-2').css(
            'transform',
            'translate(-' + x * 40 + 'px, +' + y * 50 + 'px)'
        );
        $activeSection.find('.mouse-parallax__bg-3').css(
            'transform',
            'translate(-' + x * 30 + 'px, -' + y * 60 + 'px)'
        );

    });

    //POPUP VIDEO

    $("#video-modal-trigger").click(function (e) {
        e.preventDefault();
        $("#video-popup-wrapper").addClass("active");
        $("body").addClass("overflow-hidden");
    });

    $("#video-popup-wrapper, #close-video-popup").click(function (e) {
        $("#video-popup-wrapper").removeClass("active");
        $("body").removeClass("overflow-hidden");
        var video = $('#video');

        video.attr('src', '');
        var src = video.attr('src');
        video.attr('src', src);

    });

    $(window).on('resize', function () {
        slidersInit();
    });

//    ANIMATION


    var slideInRight = $('.slide-in-right').waypoint(function (direction) {
            $(this.element).addClass('active')
        }, {
            offset: '80%'
        });
});


