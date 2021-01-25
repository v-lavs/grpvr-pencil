/**
 *To include js file from libraries write: `//= include ./path-to-file`
 * */


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
                    slidesPerView: 2,
                    spaceBetween: 30,
                    breakpoints: {
                        840: {
                            slidesPerView: 2,
                        }, 540: {
                            slidesPerView: 1,
                        },
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            }

            if (!advantagesSlider) {
                advantagesSlider = new Swiper('#advantagesSlider', {
                    // slidesPerView: 2,
                    spaceBetween: 30,
                    slidesPerView: 'auto',
                    visibilityFullFit: true,
                    autoResize: false,
                    breakpoints: {
                        320:{
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
        console.log($activeSection);
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
});



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlRvIGluY2x1ZGUganMgZmlsZSBmcm9tIGxpYnJhcmllcyB3cml0ZTogYC8vPSBpbmNsdWRlIC4vcGF0aC10by1maWxlYFxyXG4gKiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDVVNUT00gU0NSSVBUU1xyXG4gKiovXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBIRUFERVIgU0NST0xMXHJcblxyXG5cclxuICAgIHZhciBzY3JvbGxlZDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkhlYWRlclNjcm9sbCgpIHtcclxuICAgICAgICBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGlmIChzY3JvbGxlZCA+IDYwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5oZWFkZXJcIikuYWRkQ2xhc3MoJ2hlYWRlcl9hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIuaGVhZGVyXCIpLnJlbW92ZUNsYXNzKCdoZWFkZXJfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb25IZWFkZXJTY3JvbGwoKTtcclxuICAgIH0pO1xyXG4gICAgb25IZWFkZXJTY3JvbGwoKTtcclxuXHJcblxyXG4gICAgLy8gTU9CIE1FTlUgU0NSSVBUXHJcblxyXG4gICAgdmFyIG5hdiA9ICQoJy5oZWFkZXJfX25hdicpO1xyXG5cclxuICAgICQoJy5idXJnZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBuYXYuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBqUXVlcnkoJy5iYWNrZHJvcCcpLmZhZGVJbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmJ0bi1jbG9zZSwgLmJhY2tkcm9wJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbmF2LnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYmFja2Ryb3AnKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gU0xJREVSU1xyXG5cclxuICAgIHZhciBuYXZTbGlkZXI7XHJcbiAgICB2YXIgYWJvdXRHZXJwZXZpclNsaWRlcjtcclxuICAgIHZhciBhZHZhbnRhZ2VzU2xpZGVyO1xyXG5cclxuICAgIC8vc3RhZ2Utc2xpZGVyXHJcbiAgICBjb25zdCBzdGFnZVNsaWRlclNwZWVkID0gNTAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldEFjdGl2ZURvdChzdGFnZVNsaWRlckNvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gJChzdGFnZVNsaWRlckNvbnRlbnQuc2xpZGVzW3N0YWdlU2xpZGVyQ29udGVudC5yZWFsSW5kZXhdKS5maW5kKCcuc2xpZGVyLWNvbnRlbnRfX3RleHQtd3JhcCcpLmh0bWwoKTtcclxuICAgICAgICBjb25zdCBjb250ZW50V3JhcEVMID0gJCgnI3N0YWdlc1NsaWRlQ29udGVudCAuc2xpZGVyLWNvbnRlbnRfX3RleHQtd3JhcCcpO1xyXG5cclxuICAgICAgICBjb250ZW50V3JhcEVMLnJlbW92ZUNsYXNzKCdhbmltLWluJyk7XHJcbiAgICAgICAgY29udGVudFdyYXBFTC5hZGRDbGFzcygnYW5pbS1vdXQnKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRlbnRXcmFwRUwuaHRtbChjb250ZW50KTtcclxuICAgICAgICAgICAgY29udGVudFdyYXBFTC5hZGRDbGFzcygnYW5pbS1pbicpO1xyXG4gICAgICAgICAgICBjb250ZW50V3JhcEVMLnJlbW92ZUNsYXNzKCdhbmltLW91dCcpO1xyXG4gICAgICAgIH0sIHN0YWdlU2xpZGVyU3BlZWQpO1xyXG5cclxuICAgICAgICBjb25zdCBkb3RXaWR0aCA9IDEwMCAvIHN0YWdlU2xpZGVyQ29udGVudC5zbGlkZXMubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVBvc2l0aW9uID0gZG90V2lkdGggKiAoc3RhZ2VTbGlkZXJDb250ZW50LnJlYWxJbmRleCkgKyBkb3RXaWR0aCAvIDIgKyAnJSc7XHJcbiAgICAgICAgJCgnLnNsaWRlci1zdGFnZV9fcHJvZ3Jlc3MtdHJhY2snKS5jc3Moe3dpZHRoOiBoYW5kbGVQb3NpdGlvbn0pO1xyXG4gICAgICAgICQoJy5zbGlkZXItc3RhZ2VfX2hhbmRsZScpLmNzcyh7bGVmdDogaGFuZGxlUG9zaXRpb259KTtcclxuXHJcbiAgICAgICAgJCgnLnNsaWRlci1zdGFnZV9fcGFnaW5hdGlvbi1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXItc3RhZ2VfX3BhZ2luYXRpb24taXRlbScpLmVxKHN0YWdlU2xpZGVyQ29udGVudC5yZWFsSW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGFnZXNTbGlkZXIgPSBuZXcgU3dpcGVyKCcjc3RhZ2VzU2xpZGVyJywge1xyXG4gICAgICAgIHNwZWVkOiBzdGFnZVNsaWRlclNwZWVkLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb246IHtcclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlRG90KHRoaXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzbGlkZUNoYW5nZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlRG90KHRoaXMpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3RhZ2VTbGlkZXJDb250ZW50ID0gJCgnI3N0YWdlc1NsaWRlQ29udGVudCcpO1xyXG5cclxuXHJcbiAgICAkKCcuc2xpZGVyLXN0YWdlX19wYWdpbmF0aW9uLWxpbmsnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzdGFnZXNTbGlkZXIuc2xpZGVUbygkKHRoaXMpLnBhcmVudCgpLmluZGV4KCkpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2Jsb2NrLWJ0biBzbGlkZXJcclxuXHJcbiAgICB2YXIgYmxvY2tCdG5TbGlkZXIgPSBuZXcgU3dpcGVyKCcjYmxvY2tCdG5TbGlkZXInLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICBzcGFjZUJldHdlZW46IDgwLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc2xpZGVyc0luaXQoKSB7XHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDg0MCkge1xyXG4gICAgICAgICAgICBpZiAoIW5hdlNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgbmF2U2xpZGVyID0gbmV3IFN3aXBlcignI25hdlNsaWRlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0RWw6ICcubWFpbi1uYXYgLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZFbDogJy5tYWluLW5hdiAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFhYm91dEdlcnBldmlyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBhYm91dEdlcnBldmlyU2xpZGVyID0gbmV3IFN3aXBlcignI2Fib3V0R2VycGV2aXJTbGlkZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDg0MDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTQwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFkdmFudGFnZXNTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGFkdmFudGFnZXNTbGlkZXIgPSBuZXcgU3dpcGVyKCcjYWR2YW50YWdlc1NsaWRlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGdWxsRml0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9SZXNpemU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMyMDp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RnVsbEZpdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9SZXNpemU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChuYXZTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIG5hdlNsaWRlci5kZXN0cm95KHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgbmF2U2xpZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYWJvdXRHZXJwZXZpclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgYWJvdXRHZXJwZXZpclNsaWRlci5kZXN0cm95KHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYWJvdXRHZXJwZXZpclNsaWRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhZHZhbnRhZ2VzU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBhZHZhbnRhZ2VzU2xpZGVyLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBhZHZhbnRhZ2VzU2xpZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzbGlkZXJzSW5pdCgpO1xyXG5cclxuLy9TVUItTUVOVVxyXG5cclxuICAgICQoJy5zdWItbWVudV9fdG9nZ2xlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdzdWItbWVudV9fdG9nZ2xlX2FjdGl2ZScpXHJcbiAgICB9KTtcclxuXHJcbi8vSElERSBURVhUXHJcbiAgICAkKCcudGV4dC1oaWRlIC5vcGVuLXVwJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLnRleHQtaGlkZSAubW9iLWhpZGUnKS5yZW1vdmVDbGFzcygnbW9iLWhpZGUnKTtcclxuICAgICAgICAkKHRoaXMpLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFBBUkFMQVhcclxuICAgICQoJy5tb3VzZS1wYXJhbGxheCcpLm9uKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHggPSBlLmNsaWVudFggLyAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICBjb25zdCB5ID0gZS5jbGllbnRZIC8gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgIGNvbnN0ICRhY3RpdmVTZWN0aW9uID0gJChlLmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRhY3RpdmVTZWN0aW9uKTtcclxuICAgICAgICAkYWN0aXZlU2VjdGlvbi5maW5kKCcubW91c2UtcGFyYWxsYXhfX2JnJykuY3NzKFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZSgtJyArIHggKiA1MCArICdweCwgLScgKyB5ICogNDAgKyAncHgpJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgJGFjdGl2ZVNlY3Rpb24uZmluZCgnLm1vdXNlLXBhcmFsbGF4X19iZy0yJykuY3NzKFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZSgtJyArIHggKiA0MCArICdweCwgKycgKyB5ICogNTAgKyAncHgpJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgJGFjdGl2ZVNlY3Rpb24uZmluZCgnLm1vdXNlLXBhcmFsbGF4X19iZy0zJykuY3NzKFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZSgtJyArIHggKiAzMCArICdweCwgLScgKyB5ICogNjAgKyAncHgpJ1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9QT1BVUCBWSURFT1xyXG5cclxuICAgICQoXCIjdmlkZW8tbW9kYWwtdHJpZ2dlclwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKFwiI3ZpZGVvLXBvcHVwLXdyYXBwZXJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI3ZpZGVvLXBvcHVwLXdyYXBwZXIsICNjbG9zZS12aWRlby1wb3B1cFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQoXCIjdmlkZW8tcG9wdXAtd3JhcHBlclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm92ZXJmbG93LWhpZGRlblwiKTtcclxuICAgICAgICB2YXIgdmlkZW8gPSAkKCcjdmlkZW8nKTtcclxuXHJcbiAgICAgICAgdmlkZW8uYXR0cignc3JjJywgJycpO1xyXG4gICAgICAgIHZhciBzcmMgPSB2aWRlby5hdHRyKCdzcmMnKTtcclxuICAgICAgICB2aWRlby5hdHRyKCdzcmMnLCBzcmMpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNsaWRlcnNJbml0KCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
