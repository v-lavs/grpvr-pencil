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
        const contentWrapEL = $('.slider-stages .slider-content__text-wrap');
        console.log(contentWrapEL)
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlRvIGluY2x1ZGUganMgZmlsZSBmcm9tIGxpYnJhcmllcyB3cml0ZTogYC8vPSBpbmNsdWRlIC4vcGF0aC10by1maWxlYFxyXG4gKiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDVVNUT00gU0NSSVBUU1xyXG4gKiovXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBIRUFERVIgU0NST0xMXHJcblxyXG5cclxuICAgIHZhciBzY3JvbGxlZDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkhlYWRlclNjcm9sbCgpIHtcclxuICAgICAgICBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGlmIChzY3JvbGxlZCA+IDYwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5oZWFkZXJcIikuYWRkQ2xhc3MoJ2hlYWRlcl9hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIuaGVhZGVyXCIpLnJlbW92ZUNsYXNzKCdoZWFkZXJfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb25IZWFkZXJTY3JvbGwoKTtcclxuICAgIH0pO1xyXG4gICAgb25IZWFkZXJTY3JvbGwoKTtcclxuXHJcblxyXG4gICAgLy8gTU9CIE1FTlUgU0NSSVBUXHJcblxyXG4gICAgdmFyIG5hdiA9ICQoJy5oZWFkZXJfX25hdicpO1xyXG5cclxuICAgICQoJy5idXJnZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBuYXYuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBqUXVlcnkoJy5iYWNrZHJvcCcpLmZhZGVJbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmJ0bi1jbG9zZSwgLmJhY2tkcm9wJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbmF2LnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYmFja2Ryb3AnKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gU0xJREVSU1xyXG5cclxuICAgIHZhciBuYXZTbGlkZXI7XHJcbiAgICB2YXIgYWJvdXRHZXJwZXZpclNsaWRlcjtcclxuICAgIHZhciBhZHZhbnRhZ2VzU2xpZGVyO1xyXG5cclxuICAgIC8vc3RhZ2Utc2xpZGVyXHJcbiAgICBjb25zdCBzdGFnZVNsaWRlclNwZWVkID0gNTAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldEFjdGl2ZURvdChzdGFnZVNsaWRlckNvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gJChzdGFnZVNsaWRlckNvbnRlbnQuc2xpZGVzW3N0YWdlU2xpZGVyQ29udGVudC5yZWFsSW5kZXhdKS5maW5kKCcuc2xpZGVyLWNvbnRlbnRfX3RleHQtd3JhcCcpLmh0bWwoKTtcclxuICAgICAgICBjb25zdCBjb250ZW50V3JhcEVMID0gJCgnLnNsaWRlci1zdGFnZXMgLnNsaWRlci1jb250ZW50X190ZXh0LXdyYXAnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50V3JhcEVMKVxyXG4gICAgICAgIGNvbnRlbnRXcmFwRUwucmVtb3ZlQ2xhc3MoJ2FuaW0taW4nKTtcclxuICAgICAgICBjb250ZW50V3JhcEVMLmFkZENsYXNzKCdhbmltLW91dCcpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29udGVudFdyYXBFTC5odG1sKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICBjb250ZW50V3JhcEVMLmFkZENsYXNzKCdhbmltLWluJyk7XHJcbiAgICAgICAgICAgIGNvbnRlbnRXcmFwRUwucmVtb3ZlQ2xhc3MoJ2FuaW0tb3V0Jyk7XHJcbiAgICAgICAgfSwgc3RhZ2VTbGlkZXJTcGVlZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRvdFdpZHRoID0gMTAwIC8gc3RhZ2VTbGlkZXJDb250ZW50LnNsaWRlcy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlUG9zaXRpb24gPSBkb3RXaWR0aCAqIChzdGFnZVNsaWRlckNvbnRlbnQucmVhbEluZGV4KSArIGRvdFdpZHRoIC8gMiArICclJztcclxuICAgICAgICAkKCcuc2xpZGVyLXN0YWdlX19wcm9ncmVzcy10cmFjaycpLmNzcyh7d2lkdGg6IGhhbmRsZVBvc2l0aW9ufSk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1zdGFnZV9faGFuZGxlJykuY3NzKHtsZWZ0OiBoYW5kbGVQb3NpdGlvbn0pO1xyXG5cclxuICAgICAgICAkKCcuc2xpZGVyLXN0YWdlX19wYWdpbmF0aW9uLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1zdGFnZV9fcGFnaW5hdGlvbi1pdGVtJykuZXEoc3RhZ2VTbGlkZXJDb250ZW50LnJlYWxJbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YWdlc1NsaWRlciA9IG5ldyBTd2lwZXIoJyNzdGFnZXNTbGlkZXInLCB7XHJcbiAgICAgICAgc3BlZWQ6IHN0YWdlU2xpZGVyU3BlZWQsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbjoge1xyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVEb3QodGhpcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVEb3QodGhpcyk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzdGFnZVNsaWRlckNvbnRlbnQgPSAkKCcjc3RhZ2VzU2xpZGVDb250ZW50Jyk7XHJcblxyXG5cclxuICAgICQoJy5zbGlkZXItc3RhZ2VfX3BhZ2luYXRpb24tbGluaycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN0YWdlc1NsaWRlci5zbGlkZVRvKCQodGhpcykucGFyZW50KCkuaW5kZXgoKSlcclxuICAgIH0pO1xyXG5cclxuICAgIC8vYmxvY2stYnRuIHNsaWRlclxyXG5cclxuICAgIHZhciBibG9ja0J0blNsaWRlciA9IG5ldyBTd2lwZXIoJyNibG9ja0J0blNsaWRlcicsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogODAsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzbGlkZXJzSW5pdCgpIHtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gODQwKSB7XHJcbiAgICAgICAgICAgIGlmICghbmF2U2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZTbGlkZXIgPSBuZXcgU3dpcGVyKCcjbmF2U2xpZGVyJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRFbDogJy5tYWluLW5hdiAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkVsOiAnLm1haW4tbmF2IC5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWFib3V0R2VycGV2aXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGFib3V0R2VycGV2aXJTbGlkZXIgPSBuZXcgU3dpcGVyKCcjYWJvdXRHZXJwZXZpclNsaWRlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgODQwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1NDA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghYWR2YW50YWdlc1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgYWR2YW50YWdlc1NsaWRlciA9IG5ldyBTd2lwZXIoJyNhZHZhbnRhZ2VzU2xpZGVyJywge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZ1bGxGaXQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b1Jlc2l6ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMzIwOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGdWxsRml0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1Jlc2l6ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG5hdlNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgbmF2U2xpZGVyLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBuYXZTbGlkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhYm91dEdlcnBldmlyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBhYm91dEdlcnBldmlyU2xpZGVyLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBhYm91dEdlcnBldmlyU2xpZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFkdmFudGFnZXNTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGFkdmFudGFnZXNTbGlkZXIuZGVzdHJveSh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGFkdmFudGFnZXNTbGlkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlcnNJbml0KCk7XHJcblxyXG4vL1NVQi1NRU5VXHJcblxyXG4gICAgJCgnLnN1Yi1tZW51X190b2dnbGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3N1Yi1tZW51X190b2dnbGVfYWN0aXZlJylcclxuICAgIH0pO1xyXG5cclxuLy9ISURFIFRFWFRcclxuICAgICQoJy50ZXh0LWhpZGUgLm9wZW4tdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcudGV4dC1oaWRlIC5tb2ItaGlkZScpLnJlbW92ZUNsYXNzKCdtb2ItaGlkZScpO1xyXG4gICAgICAgICQodGhpcykuaGlkZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUEFSQUxBWFxyXG4gICAgJCgnLm1vdXNlLXBhcmFsbGF4Jykub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeCA9IGUuY2xpZW50WCAvICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLyAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgY29uc3QgJGFjdGl2ZVNlY3Rpb24gPSAkKGUuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJGFjdGl2ZVNlY3Rpb24pO1xyXG4gICAgICAgICRhY3RpdmVTZWN0aW9uLmZpbmQoJy5tb3VzZS1wYXJhbGxheF9fYmcnKS5jc3MoXHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICAndHJhbnNsYXRlKC0nICsgeCAqIDUwICsgJ3B4LCAtJyArIHkgKiA0MCArICdweCknXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkYWN0aXZlU2VjdGlvbi5maW5kKCcubW91c2UtcGFyYWxsYXhfX2JnLTInKS5jc3MoXHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICAndHJhbnNsYXRlKC0nICsgeCAqIDQwICsgJ3B4LCArJyArIHkgKiA1MCArICdweCknXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkYWN0aXZlU2VjdGlvbi5maW5kKCcubW91c2UtcGFyYWxsYXhfX2JnLTMnKS5jc3MoXHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICAndHJhbnNsYXRlKC0nICsgeCAqIDMwICsgJ3B4LCAtJyArIHkgKiA2MCArICdweCknXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1BPUFVQIFZJREVPXHJcblxyXG4gICAgJChcIiN2aWRlby1tb2RhbC10cmlnZ2VyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoXCIjdmlkZW8tcG9wdXAtd3JhcHBlclwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcIm92ZXJmbG93LWhpZGRlblwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjdmlkZW8tcG9wdXAtd3JhcHBlciwgI2Nsb3NlLXZpZGVvLXBvcHVwXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJChcIiN2aWRlby1wb3B1cC13cmFwcGVyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG4gICAgICAgIHZhciB2aWRlbyA9ICQoJyN2aWRlbycpO1xyXG5cclxuICAgICAgICB2aWRlby5hdHRyKCdzcmMnLCAnJyk7XHJcbiAgICAgICAgdmFyIHNyYyA9IHZpZGVvLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIHZpZGVvLmF0dHIoJ3NyYycsIHNyYyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2xpZGVyc0luaXQoKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
