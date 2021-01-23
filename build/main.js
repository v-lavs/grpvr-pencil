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
                    slidesPerView: 2,
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
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
                    slidesPerView: 2,
                    spaceBetween: 30,
                    breakpoints: {

                        540: {
                            slidesPerView: 2,
                        },

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
    $('.text-hide .read-more').on('click', function (e) {
        e.preventDefault();
        $(this).siblings().removeClass('hide');
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlRvIGluY2x1ZGUganMgZmlsZSBmcm9tIGxpYnJhcmllcyB3cml0ZTogYC8vPSBpbmNsdWRlIC4vcGF0aC10by1maWxlYFxyXG4gKiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDVVNUT00gU0NSSVBUU1xyXG4gKiovXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBIRUFERVIgU0NST0xMXHJcblxyXG5cclxuICAgIHZhciBzY3JvbGxlZDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkhlYWRlclNjcm9sbCgpIHtcclxuICAgICAgICBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGlmIChzY3JvbGxlZCA+IDYwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5oZWFkZXJcIikuYWRkQ2xhc3MoJ2hlYWRlcl9hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIuaGVhZGVyXCIpLnJlbW92ZUNsYXNzKCdoZWFkZXJfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb25IZWFkZXJTY3JvbGwoKTtcclxuICAgIH0pO1xyXG4gICAgb25IZWFkZXJTY3JvbGwoKTtcclxuXHJcblxyXG4gICAgLy8gTU9CIE1FTlUgU0NSSVBUXHJcblxyXG4gICAgdmFyIG5hdiA9ICQoJy5oZWFkZXJfX25hdicpO1xyXG5cclxuICAgICQoJy5idXJnZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBuYXYuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBqUXVlcnkoJy5iYWNrZHJvcCcpLmZhZGVJbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmJ0bi1jbG9zZSwgLmJhY2tkcm9wJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbmF2LnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYmFja2Ryb3AnKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gU0xJREVSU1xyXG5cclxuICAgIHZhciBuYXZTbGlkZXI7XHJcbiAgICB2YXIgYWJvdXRHZXJwZXZpclNsaWRlcjtcclxuICAgIHZhciBhZHZhbnRhZ2VzU2xpZGVyO1xyXG5cclxuICAgIC8vc3RhZ2Utc2xpZGVyXHJcbiAgICBjb25zdCBzdGFnZVNsaWRlclNwZWVkID0gNTAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldEFjdGl2ZURvdChzdGFnZVNsaWRlckNvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gJChzdGFnZVNsaWRlckNvbnRlbnQuc2xpZGVzW3N0YWdlU2xpZGVyQ29udGVudC5yZWFsSW5kZXhdKS5maW5kKCcuc2xpZGVyLWNvbnRlbnRfX3RleHQtd3JhcCcpLmh0bWwoKTtcclxuICAgICAgICBjb25zdCBjb250ZW50V3JhcEVMID0gJCgnLnNsaWRlci1zdGFnZXMgLnNsaWRlci1jb250ZW50X190ZXh0LXdyYXAnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50V3JhcEVMKVxyXG4gICAgICAgIGNvbnRlbnRXcmFwRUwucmVtb3ZlQ2xhc3MoJ2FuaW0taW4nKTtcclxuICAgICAgICBjb250ZW50V3JhcEVMLmFkZENsYXNzKCdhbmltLW91dCcpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29udGVudFdyYXBFTC5odG1sKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICBjb250ZW50V3JhcEVMLmFkZENsYXNzKCdhbmltLWluJyk7XHJcbiAgICAgICAgICAgIGNvbnRlbnRXcmFwRUwucmVtb3ZlQ2xhc3MoJ2FuaW0tb3V0Jyk7XHJcbiAgICAgICAgfSwgc3RhZ2VTbGlkZXJTcGVlZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRvdFdpZHRoID0gMTAwIC8gc3RhZ2VTbGlkZXJDb250ZW50LnNsaWRlcy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlUG9zaXRpb24gPSBkb3RXaWR0aCAqIChzdGFnZVNsaWRlckNvbnRlbnQucmVhbEluZGV4KSArIGRvdFdpZHRoIC8gMiArICclJztcclxuICAgICAgICAkKCcuc2xpZGVyLXN0YWdlX19wcm9ncmVzcy10cmFjaycpLmNzcyh7d2lkdGg6IGhhbmRsZVBvc2l0aW9ufSk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1zdGFnZV9faGFuZGxlJykuY3NzKHtsZWZ0OiBoYW5kbGVQb3NpdGlvbn0pO1xyXG5cclxuICAgICAgICAkKCcuc2xpZGVyLXN0YWdlX19wYWdpbmF0aW9uLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1zdGFnZV9fcGFnaW5hdGlvbi1pdGVtJykuZXEoc3RhZ2VTbGlkZXJDb250ZW50LnJlYWxJbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YWdlc1NsaWRlciA9IG5ldyBTd2lwZXIoJyNzdGFnZXNTbGlkZXInLCB7XHJcbiAgICAgICAgc3BlZWQ6IHN0YWdlU2xpZGVyU3BlZWQsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbjoge1xyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVEb3QodGhpcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVEb3QodGhpcyk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzdGFnZVNsaWRlckNvbnRlbnQgPSAkKCcjc3RhZ2VzU2xpZGVDb250ZW50Jyk7XHJcblxyXG5cclxuICAgICQoJy5zbGlkZXItc3RhZ2VfX3BhZ2luYXRpb24tbGluaycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN0YWdlc1NsaWRlci5zbGlkZVRvKCQodGhpcykucGFyZW50KCkuaW5kZXgoKSlcclxuICAgIH0pO1xyXG5cclxuICAgIC8vYmxvY2stYnRuIHNsaWRlclxyXG5cclxuICAgIHZhciBibG9ja0J0blNsaWRlciA9IG5ldyBTd2lwZXIoJyNibG9ja0J0blNsaWRlcicsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogODAsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzbGlkZXJzSW5pdCgpIHtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gODQwKSB7XHJcbiAgICAgICAgICAgIGlmICghbmF2U2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZTbGlkZXIgPSBuZXcgU3dpcGVyKCcjbmF2U2xpZGVyJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFhYm91dEdlcnBldmlyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBhYm91dEdlcnBldmlyU2xpZGVyID0gbmV3IFN3aXBlcignI2Fib3V0R2VycGV2aXJTbGlkZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDg0MDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTQwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFkdmFudGFnZXNTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGFkdmFudGFnZXNTbGlkZXIgPSBuZXcgU3dpcGVyKCcjYWR2YW50YWdlc1NsaWRlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDU0MDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMyMDp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RnVsbEZpdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9SZXNpemU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChuYXZTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIG5hdlNsaWRlci5kZXN0cm95KHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgbmF2U2xpZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYWJvdXRHZXJwZXZpclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgYWJvdXRHZXJwZXZpclNsaWRlci5kZXN0cm95KHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYWJvdXRHZXJwZXZpclNsaWRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhZHZhbnRhZ2VzU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBhZHZhbnRhZ2VzU2xpZGVyLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBhZHZhbnRhZ2VzU2xpZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzbGlkZXJzSW5pdCgpO1xyXG5cclxuLy9TVUItTUVOVVxyXG5cclxuICAgICQoJy5zdWItbWVudV9fdG9nZ2xlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdzdWItbWVudV9fdG9nZ2xlX2FjdGl2ZScpXHJcbiAgICB9KTtcclxuXHJcbi8vSElERSBURVhUXHJcbiAgICAkKCcudGV4dC1oaWRlIC5yZWFkLW1vcmUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAkKHRoaXMpLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFBBUkFMQVhcclxuICAgICQoJy5tb3VzZS1wYXJhbGxheCcpLm9uKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHggPSBlLmNsaWVudFggLyAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICBjb25zdCB5ID0gZS5jbGllbnRZIC8gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgIGNvbnN0ICRhY3RpdmVTZWN0aW9uID0gJChlLmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRhY3RpdmVTZWN0aW9uKTtcclxuICAgICAgICAkYWN0aXZlU2VjdGlvbi5maW5kKCcubW91c2UtcGFyYWxsYXhfX2JnJykuY3NzKFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZSgtJyArIHggKiA1MCArICdweCwgLScgKyB5ICogNDAgKyAncHgpJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgJGFjdGl2ZVNlY3Rpb24uZmluZCgnLm1vdXNlLXBhcmFsbGF4X19iZy0yJykuY3NzKFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZSgtJyArIHggKiA0MCArICdweCwgKycgKyB5ICogNTAgKyAncHgpJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgJGFjdGl2ZVNlY3Rpb24uZmluZCgnLm1vdXNlLXBhcmFsbGF4X19iZy0zJykuY3NzKFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZSgtJyArIHggKiAzMCArICdweCwgLScgKyB5ICogNjAgKyAncHgpJ1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9QT1BVUCBWSURFT1xyXG5cclxuICAgICQoXCIjdmlkZW8tbW9kYWwtdHJpZ2dlclwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKFwiI3ZpZGVvLXBvcHVwLXdyYXBwZXJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI3ZpZGVvLXBvcHVwLXdyYXBwZXIsICNjbG9zZS12aWRlby1wb3B1cFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQoXCIjdmlkZW8tcG9wdXAtd3JhcHBlclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm92ZXJmbG93LWhpZGRlblwiKTtcclxuICAgICAgICB2YXIgdmlkZW8gPSAkKCcjdmlkZW8nKTtcclxuXHJcbiAgICAgICAgdmlkZW8uYXR0cignc3JjJywgJycpO1xyXG4gICAgICAgIHZhciBzcmMgPSB2aWRlby5hdHRyKCdzcmMnKTtcclxuICAgICAgICB2aWRlby5hdHRyKCdzcmMnLCBzcmMpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNsaWRlcnNJbml0KCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
