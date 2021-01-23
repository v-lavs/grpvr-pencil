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


    // SLIDERS

    var navSlider;
    var aboutGerpevirSlider;
    var advantagesSlider;

    //stage-slider
    const stageSliderSpeed = 500;

    function setActiveDot (stageSliderContent) {
        const content = $(stageSliderContent.slides[stageSliderContent.realIndex]).find('.slider-content__text-wrap').html();
        const contentWrapEL = $(stageSliderContent).find('.slider-content__text-wrap');

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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    function slidersInit() {
        if ($(window).width() <= 1040) {
            if (!navSlider) {
                navSlider = new Swiper('#navSlider', {
                    slidesPerView: 3,
                    spaceBetween: 20,
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

                        540: {
                            slidesPerView: 2,
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
                    breakpoints: {

                        540: {
                            slidesPerView: 1,
                        },
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlRvIGluY2x1ZGUganMgZmlsZSBmcm9tIGxpYnJhcmllcyB3cml0ZTogYC8vPSBpbmNsdWRlIC4vcGF0aC10by1maWxlYFxyXG4gKiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDVVNUT00gU0NSSVBUU1xyXG4gKiovXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBIRUFERVIgU0NST0xMXHJcblxyXG5cclxuICAgIHZhciBzY3JvbGxlZDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkhlYWRlclNjcm9sbCgpIHtcclxuICAgICAgICBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGlmIChzY3JvbGxlZCA+IDYwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5oZWFkZXJcIikuYWRkQ2xhc3MoJ2hlYWRlcl9hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIuaGVhZGVyXCIpLnJlbW92ZUNsYXNzKCdoZWFkZXJfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb25IZWFkZXJTY3JvbGwoKTtcclxuICAgIH0pO1xyXG4gICAgb25IZWFkZXJTY3JvbGwoKTtcclxuXHJcblxyXG4gICAgICAvLyBNT0IgTUVOVSBTQ1JJUFRcclxuXHJcbiAgICB2YXIgbmF2ID0gJCgnLm1haW4tbmF2Jyk7XHJcblxyXG4gICAgJCgnLmJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG5hdi5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLmJhY2tkcm9wJykuZmFkZUluKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuYnRuLWNsb3NlLCAuYmFja2Ryb3AnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBuYXYucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBqUXVlcnkoJy5iYWNrZHJvcCcpLmZhZGVPdXQoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBTTElERVJTXHJcblxyXG4gICAgdmFyIG5hdlNsaWRlcjtcclxuICAgIHZhciBhYm91dEdlcnBldmlyU2xpZGVyO1xyXG4gICAgdmFyIGFkdmFudGFnZXNTbGlkZXI7XHJcblxyXG4gICAgLy9zdGFnZS1zbGlkZXJcclxuICAgIGNvbnN0IHN0YWdlU2xpZGVyU3BlZWQgPSA1MDA7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlRG90IChzdGFnZVNsaWRlckNvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gJChzdGFnZVNsaWRlckNvbnRlbnQuc2xpZGVzW3N0YWdlU2xpZGVyQ29udGVudC5yZWFsSW5kZXhdKS5maW5kKCcuc2xpZGVyLWNvbnRlbnRfX3RleHQtd3JhcCcpLmh0bWwoKTtcclxuICAgICAgICBjb25zdCBjb250ZW50V3JhcEVMID0gJChzdGFnZVNsaWRlckNvbnRlbnQpLmZpbmQoJy5zbGlkZXItY29udGVudF9fdGV4dC13cmFwJyk7XHJcblxyXG4gICAgICAgIGNvbnRlbnRXcmFwRUwucmVtb3ZlQ2xhc3MoJ2FuaW0taW4nKTtcclxuICAgICAgICBjb250ZW50V3JhcEVMLmFkZENsYXNzKCdhbmltLW91dCcpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29udGVudFdyYXBFTC5odG1sKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICBjb250ZW50V3JhcEVMLmFkZENsYXNzKCdhbmltLWluJyk7XHJcbiAgICAgICAgICAgIGNvbnRlbnRXcmFwRUwucmVtb3ZlQ2xhc3MoJ2FuaW0tb3V0Jyk7XHJcbiAgICAgICAgfSwgc3RhZ2VTbGlkZXJTcGVlZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRvdFdpZHRoID0gMTAwIC8gc3RhZ2VTbGlkZXJDb250ZW50LnNsaWRlcy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlUG9zaXRpb24gPSBkb3RXaWR0aCAqIChzdGFnZVNsaWRlckNvbnRlbnQucmVhbEluZGV4KSArIGRvdFdpZHRoIC8gMiArICclJztcclxuICAgICAgICAkKCcuc2xpZGVyLXN0YWdlX19wcm9ncmVzcy10cmFjaycpLmNzcyh7d2lkdGg6IGhhbmRsZVBvc2l0aW9ufSk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1zdGFnZV9faGFuZGxlJykuY3NzKHtsZWZ0OiBoYW5kbGVQb3NpdGlvbn0pO1xyXG5cclxuICAgICAgICAkKCcuc2xpZGVyLXN0YWdlX19wYWdpbmF0aW9uLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1zdGFnZV9fcGFnaW5hdGlvbi1pdGVtJykuZXEoc3RhZ2VTbGlkZXJDb250ZW50LnJlYWxJbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YWdlc1NsaWRlciA9IG5ldyBTd2lwZXIoJyNzdGFnZXNTbGlkZXInLCB7XHJcbiAgICAgICAgc3BlZWQ6IHN0YWdlU2xpZGVyU3BlZWQsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbjoge1xyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVEb3QodGhpcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVEb3QodGhpcyk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzdGFnZVNsaWRlckNvbnRlbnQgPSAkKCcjc3RhZ2VzU2xpZGVDb250ZW50Jyk7XHJcblxyXG5cclxuICAgICQoJy5zbGlkZXItc3RhZ2VfX3BhZ2luYXRpb24tbGluaycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN0YWdlc1NsaWRlci5zbGlkZVRvKCQodGhpcykucGFyZW50KCkuaW5kZXgoKSlcclxuICAgIH0pO1xyXG5cclxuICAgIC8vYmxvY2stYnRuIHNsaWRlclxyXG5cclxuICAgIHZhciBibG9ja0J0blNsaWRlciA9IG5ldyBTd2lwZXIoJyNibG9ja0J0blNsaWRlcicsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc2xpZGVyc0luaXQoKSB7XHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDEwNDApIHtcclxuICAgICAgICAgICAgaWYgKCFuYXZTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIG5hdlNsaWRlciA9IG5ldyBTd2lwZXIoJyNuYXZTbGlkZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWFib3V0R2VycGV2aXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGFib3V0R2VycGV2aXJTbGlkZXIgPSBuZXcgU3dpcGVyKCcjYWJvdXRHZXJwZXZpclNsaWRlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDU0MDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFhZHZhbnRhZ2VzU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBhZHZhbnRhZ2VzU2xpZGVyID0gbmV3IFN3aXBlcignI2FkdmFudGFnZXNTbGlkZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50czoge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgNTQwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobmF2U2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZTbGlkZXIuZGVzdHJveSh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIG5hdlNsaWRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFib3V0R2VycGV2aXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGFib3V0R2VycGV2aXJTbGlkZXIuZGVzdHJveSh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGFib3V0R2VycGV2aXJTbGlkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYWR2YW50YWdlc1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgYWR2YW50YWdlc1NsaWRlci5kZXN0cm95KHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYWR2YW50YWdlc1NsaWRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVyc0luaXQoKTtcclxuXHJcbi8vU1VCLU1FTlVcclxuXHJcbiAgICAkKCcuc3ViLW1lbnVfX3RvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnc3ViLW1lbnVfX3RvZ2dsZV9hY3RpdmUnKVxyXG4gICAgfSk7XHJcblxyXG4vL0hJREUgVEVYVFxyXG4gICAgJCgnLnRleHQtaGlkZSAucmVhZC1tb3JlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBQQVJBTEFYXHJcbiAgICAkKCcubW91c2UtcGFyYWxsYXgnKS5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB4ID0gZS5jbGllbnRYIC8gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAvICQod2luZG93KS5oZWlnaHQoKTtcclxuICAgICAgICBjb25zdCAkYWN0aXZlU2VjdGlvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBjb25zb2xlLmxvZygkYWN0aXZlU2VjdGlvbik7XHJcbiAgICAgICAgJGFjdGl2ZVNlY3Rpb24uZmluZCgnLm1vdXNlLXBhcmFsbGF4X19iZycpLmNzcyhcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICAgICd0cmFuc2xhdGUoLScgKyB4ICogNTAgKyAncHgsIC0nICsgeSAqIDQwICsgJ3B4KSdcclxuICAgICAgICApO1xyXG4gICAgICAgICRhY3RpdmVTZWN0aW9uLmZpbmQoJy5tb3VzZS1wYXJhbGxheF9fYmctMicpLmNzcyhcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICAgICd0cmFuc2xhdGUoLScgKyB4ICogNDAgKyAncHgsICsnICsgeSAqIDUwICsgJ3B4KSdcclxuICAgICAgICApO1xyXG4gICAgICAgICRhY3RpdmVTZWN0aW9uLmZpbmQoJy5tb3VzZS1wYXJhbGxheF9fYmctMycpLmNzcyhcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICAgICd0cmFuc2xhdGUoLScgKyB4ICogMzAgKyAncHgsIC0nICsgeSAqIDYwICsgJ3B4KSdcclxuICAgICAgICApO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICAgLy9QT1BVUCBWSURFT1xyXG5cclxuICAgICQoXCIjdmlkZW8tbW9kYWwtdHJpZ2dlclwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKFwiI3ZpZGVvLXBvcHVwLXdyYXBwZXJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI3ZpZGVvLXBvcHVwLXdyYXBwZXIsICNjbG9zZS12aWRlby1wb3B1cFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQoXCIjdmlkZW8tcG9wdXAtd3JhcHBlclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm92ZXJmbG93LWhpZGRlblwiKTtcclxuICAgICAgICB2YXIgdmlkZW8gPSAkKCcjdmlkZW8nKTtcclxuXHJcbiAgICAgICAgdmlkZW8uYXR0cignc3JjJywgJycpO1xyXG4gICAgICAgIHZhciBzcmMgPSB2aWRlby5hdHRyKCdzcmMnKTtcclxuICAgICAgICB2aWRlby5hdHRyKCdzcmMnLCBzcmMpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2xpZGVyc0luaXQoKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
