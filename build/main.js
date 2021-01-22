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

    var navSlider;
    var aboutGerpevirSlider;
    var advantagesSlider;

    const stageSliderSpeed = 500;

    const stagesSlider = new Swiper('#stagesSlider', {
        speed: stageSliderSpeed,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    const stageSliderContent = $('#stagesSlideContent');

    stagesSlider.on('slideChange', function () {
        const content = $(this.slides[this.realIndex]).find('.slider-content__text-wrap').html();
        const contentWrapEL = stageSliderContent.find('.slider-content__text-wrap');

        contentWrapEL.removeClass('anim-in');
        contentWrapEL.addClass('anim-out');

        setTimeout(() => {
            contentWrapEL.html(content);
            contentWrapEL.addClass('anim-in');
            contentWrapEL.removeClass('anim-out');
        }, stageSliderSpeed);

        const dotWidth = 100 / this.slides.length + 1;
        const handlePosition = dotWidth * (this.realIndex) + dotWidth / 2 + '%';
        $('.slider-stage__progress-track').css({width: handlePosition});
        $('.slider-stage__handle').css({left: handlePosition});

        $('.slider-stage__pagination-item').removeClass('active');
        $('.slider-stage__pagination-item').eq(this.realIndex).addClass('active');
    });

    $('.slider-stage__pagination-link').click(function (e) {
        e.preventDefault();
        stagesSlider.slideTo($(this).parent().index())
    });

    var btnSlider = new Swiper('#btnSlider', {
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

    });

    $(window).on('resize', function () {
        slidersInit();
    });
});



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlRvIGluY2x1ZGUganMgZmlsZSBmcm9tIGxpYnJhcmllcyB3cml0ZTogYC8vPSBpbmNsdWRlIC4vcGF0aC10by1maWxlYFxyXG4gKiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDVVNUT00gU0NSSVBUU1xyXG4gKiovXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEhFQURFUiBTQ1JPTExcclxuICAgICAqL1xyXG5cclxuICAgIHZhciBzY3JvbGxlZDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkhlYWRlclNjcm9sbCgpIHtcclxuICAgICAgICBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGlmIChzY3JvbGxlZCA+IDYwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5oZWFkZXJcIikuYWRkQ2xhc3MoJ2hlYWRlcl9hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIuaGVhZGVyXCIpLnJlbW92ZUNsYXNzKCdoZWFkZXJfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb25IZWFkZXJTY3JvbGwoKTtcclxuICAgIH0pO1xyXG4gICAgb25IZWFkZXJTY3JvbGwoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1PQiBNRU5VIFNDUklQVFxyXG4gICAgICoqL1xyXG5cclxuICAgIHZhciBuYXYgPSAkKCcubWFpbi1uYXYnKTtcclxuXHJcbiAgICAkKCcuYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbmF2LmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYmFja2Ryb3AnKS5mYWRlSW4oKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5idG4tY2xvc2UsIC5iYWNrZHJvcCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG5hdi5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLmJhY2tkcm9wJykuZmFkZU91dCgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIHNsaWRlclxyXG5cclxuICAgIHZhciBuYXZTbGlkZXI7XHJcbiAgICB2YXIgYWJvdXRHZXJwZXZpclNsaWRlcjtcclxuICAgIHZhciBhZHZhbnRhZ2VzU2xpZGVyO1xyXG5cclxuICAgIGNvbnN0IHN0YWdlU2xpZGVyU3BlZWQgPSA1MDA7XHJcblxyXG4gICAgY29uc3Qgc3RhZ2VzU2xpZGVyID0gbmV3IFN3aXBlcignI3N0YWdlc1NsaWRlcicsIHtcclxuICAgICAgICBzcGVlZDogc3RhZ2VTbGlkZXJTcGVlZCxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzdGFnZVNsaWRlckNvbnRlbnQgPSAkKCcjc3RhZ2VzU2xpZGVDb250ZW50Jyk7XHJcblxyXG4gICAgc3RhZ2VzU2xpZGVyLm9uKCdzbGlkZUNoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gJCh0aGlzLnNsaWRlc1t0aGlzLnJlYWxJbmRleF0pLmZpbmQoJy5zbGlkZXItY29udGVudF9fdGV4dC13cmFwJykuaHRtbCgpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRXcmFwRUwgPSBzdGFnZVNsaWRlckNvbnRlbnQuZmluZCgnLnNsaWRlci1jb250ZW50X190ZXh0LXdyYXAnKTtcclxuXHJcbiAgICAgICAgY29udGVudFdyYXBFTC5yZW1vdmVDbGFzcygnYW5pbS1pbicpO1xyXG4gICAgICAgIGNvbnRlbnRXcmFwRUwuYWRkQ2xhc3MoJ2FuaW0tb3V0Jyk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250ZW50V3JhcEVMLmh0bWwoY29udGVudCk7XHJcbiAgICAgICAgICAgIGNvbnRlbnRXcmFwRUwuYWRkQ2xhc3MoJ2FuaW0taW4nKTtcclxuICAgICAgICAgICAgY29udGVudFdyYXBFTC5yZW1vdmVDbGFzcygnYW5pbS1vdXQnKTtcclxuICAgICAgICB9LCBzdGFnZVNsaWRlclNwZWVkKTtcclxuXHJcbiAgICAgICAgY29uc3QgZG90V2lkdGggPSAxMDAgLyB0aGlzLnNsaWRlcy5sZW5ndGggKyAxO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVBvc2l0aW9uID0gZG90V2lkdGggKiAodGhpcy5yZWFsSW5kZXgpICsgZG90V2lkdGggLyAyICsgJyUnO1xyXG4gICAgICAgICQoJy5zbGlkZXItc3RhZ2VfX3Byb2dyZXNzLXRyYWNrJykuY3NzKHt3aWR0aDogaGFuZGxlUG9zaXRpb259KTtcclxuICAgICAgICAkKCcuc2xpZGVyLXN0YWdlX19oYW5kbGUnKS5jc3Moe2xlZnQ6IGhhbmRsZVBvc2l0aW9ufSk7XHJcblxyXG4gICAgICAgICQoJy5zbGlkZXItc3RhZ2VfX3BhZ2luYXRpb24taXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyLXN0YWdlX19wYWdpbmF0aW9uLWl0ZW0nKS5lcSh0aGlzLnJlYWxJbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNsaWRlci1zdGFnZV9fcGFnaW5hdGlvbi1saW5rJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc3RhZ2VzU2xpZGVyLnNsaWRlVG8oJCh0aGlzKS5wYXJlbnQoKS5pbmRleCgpKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGJ0blNsaWRlciA9IG5ldyBTd2lwZXIoJyNidG5TbGlkZXInLCB7XHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNsaWRlcnNJbml0KCkge1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAxMDQwKSB7XHJcbiAgICAgICAgICAgIGlmICghbmF2U2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZTbGlkZXIgPSBuZXcgU3dpcGVyKCcjbmF2U2xpZGVyJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFhYm91dEdlcnBldmlyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBhYm91dEdlcnBldmlyU2xpZGVyID0gbmV3IFN3aXBlcignI2Fib3V0R2VycGV2aXJTbGlkZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA1NDA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghYWR2YW50YWdlc1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgYWR2YW50YWdlc1NsaWRlciA9IG5ldyBTd2lwZXIoJyNhZHZhbnRhZ2VzU2xpZGVyJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDU0MDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG5hdlNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgbmF2U2xpZGVyLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBuYXZTbGlkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhYm91dEdlcnBldmlyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBhYm91dEdlcnBldmlyU2xpZGVyLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBhYm91dEdlcnBldmlyU2xpZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFkdmFudGFnZXNTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGFkdmFudGFnZXNTbGlkZXIuZGVzdHJveSh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGFkdmFudGFnZXNTbGlkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlcnNJbml0KCk7XHJcblxyXG4vL1NVQi1NRU5VXHJcblxyXG4gICAgJCgnLnN1Yi1tZW51X190b2dnbGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3N1Yi1tZW51X190b2dnbGVfYWN0aXZlJylcclxuICAgIH0pO1xyXG5cclxuLy9ISURFIFRFWFRcclxuICAgICQoJy50ZXh0LWhpZGUgLnJlYWQtbW9yZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICQodGhpcykuaGlkZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUEFSQUxBWFxyXG4gICAgJCgnLm1vdXNlLXBhcmFsbGF4Jykub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeCA9IGUuY2xpZW50WCAvICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLyAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgY29uc3QgJGFjdGl2ZVNlY3Rpb24gPSAkKGUuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJGFjdGl2ZVNlY3Rpb24pO1xyXG4gICAgICAgICRhY3RpdmVTZWN0aW9uLmZpbmQoJy5tb3VzZS1wYXJhbGxheF9fYmcnKS5jc3MoXHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICAndHJhbnNsYXRlKC0nICsgeCAqIDUwICsgJ3B4LCAtJyArIHkgKiA0MCArICdweCknXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkYWN0aXZlU2VjdGlvbi5maW5kKCcubW91c2UtcGFyYWxsYXhfX2JnLTInKS5jc3MoXHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICAndHJhbnNsYXRlKC0nICsgeCAqIDQwICsgJ3B4LCArJyArIHkgKiA1MCArICdweCknXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzbGlkZXJzSW5pdCgpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
