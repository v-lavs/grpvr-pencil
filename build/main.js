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

        const dotWidth = 100 / this.slides.length;
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlRvIGluY2x1ZGUganMgZmlsZSBmcm9tIGxpYnJhcmllcyB3cml0ZTogYC8vPSBpbmNsdWRlIC4vcGF0aC10by1maWxlYFxyXG4gKiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDVVNUT00gU0NSSVBUU1xyXG4gKiovXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEhFQURFUiBTQ1JPTExcclxuICAgICAqL1xyXG5cclxuICAgIHZhciBzY3JvbGxlZDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkhlYWRlclNjcm9sbCgpIHtcclxuICAgICAgICBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGlmIChzY3JvbGxlZCA+IDYwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5oZWFkZXJcIikuYWRkQ2xhc3MoJ2hlYWRlcl9hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIuaGVhZGVyXCIpLnJlbW92ZUNsYXNzKCdoZWFkZXJfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb25IZWFkZXJTY3JvbGwoKTtcclxuICAgIH0pO1xyXG4gICAgb25IZWFkZXJTY3JvbGwoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1PQiBNRU5VIFNDUklQVFxyXG4gICAgICoqL1xyXG5cclxuICAgIHZhciBuYXYgPSAkKCcubWFpbi1uYXYnKTtcclxuXHJcbiAgICAkKCcuYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbmF2LmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYmFja2Ryb3AnKS5mYWRlSW4oKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5idG4tY2xvc2UsIC5iYWNrZHJvcCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG5hdi5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLmJhY2tkcm9wJykuZmFkZU91dCgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIHNsaWRlclxyXG5cclxuICAgIHZhciBuYXZTbGlkZXI7XHJcbiAgICB2YXIgYWJvdXRHZXJwZXZpclNsaWRlcjtcclxuICAgIHZhciBhZHZhbnRhZ2VzU2xpZGVyO1xyXG5cclxuICAgIGNvbnN0IHN0YWdlU2xpZGVyU3BlZWQgPSA1MDA7XHJcblxyXG4gICAgY29uc3Qgc3RhZ2VzU2xpZGVyID0gbmV3IFN3aXBlcignI3N0YWdlc1NsaWRlcicsIHtcclxuICAgICAgICBzcGVlZDogc3RhZ2VTbGlkZXJTcGVlZCxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzdGFnZVNsaWRlckNvbnRlbnQgPSAkKCcjc3RhZ2VzU2xpZGVDb250ZW50Jyk7XHJcblxyXG4gICAgc3RhZ2VzU2xpZGVyLm9uKCdzbGlkZUNoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gJCh0aGlzLnNsaWRlc1t0aGlzLnJlYWxJbmRleF0pLmZpbmQoJy5zbGlkZXItY29udGVudF9fdGV4dC13cmFwJykuaHRtbCgpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRXcmFwRUwgPSBzdGFnZVNsaWRlckNvbnRlbnQuZmluZCgnLnNsaWRlci1jb250ZW50X190ZXh0LXdyYXAnKTtcclxuXHJcbiAgICAgICAgY29udGVudFdyYXBFTC5yZW1vdmVDbGFzcygnYW5pbS1pbicpO1xyXG4gICAgICAgIGNvbnRlbnRXcmFwRUwuYWRkQ2xhc3MoJ2FuaW0tb3V0Jyk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250ZW50V3JhcEVMLmh0bWwoY29udGVudCk7XHJcbiAgICAgICAgICAgIGNvbnRlbnRXcmFwRUwuYWRkQ2xhc3MoJ2FuaW0taW4nKTtcclxuICAgICAgICAgICAgY29udGVudFdyYXBFTC5yZW1vdmVDbGFzcygnYW5pbS1vdXQnKTtcclxuICAgICAgICB9LCBzdGFnZVNsaWRlclNwZWVkKTtcclxuXHJcbiAgICAgICAgY29uc3QgZG90V2lkdGggPSAxMDAgLyB0aGlzLnNsaWRlcy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlUG9zaXRpb24gPSBkb3RXaWR0aCAqICh0aGlzLnJlYWxJbmRleCkgKyBkb3RXaWR0aCAvIDIgKyAnJSc7XHJcbiAgICAgICAgJCgnLnNsaWRlci1zdGFnZV9fcHJvZ3Jlc3MtdHJhY2snKS5jc3Moe3dpZHRoOiBoYW5kbGVQb3NpdGlvbn0pO1xyXG4gICAgICAgICQoJy5zbGlkZXItc3RhZ2VfX2hhbmRsZScpLmNzcyh7bGVmdDogaGFuZGxlUG9zaXRpb259KTtcclxuXHJcbiAgICAgICAgJCgnLnNsaWRlci1zdGFnZV9fcGFnaW5hdGlvbi1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXItc3RhZ2VfX3BhZ2luYXRpb24taXRlbScpLmVxKHRoaXMucmVhbEluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc2xpZGVyLXN0YWdlX19wYWdpbmF0aW9uLWxpbmsnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzdGFnZXNTbGlkZXIuc2xpZGVUbygkKHRoaXMpLnBhcmVudCgpLmluZGV4KCkpXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgYnRuU2xpZGVyID0gbmV3IFN3aXBlcignI2J0blNsaWRlcicsIHtcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2xpZGVyc0luaXQoKSB7XHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDEwNDApIHtcclxuICAgICAgICAgICAgaWYgKCFuYXZTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIG5hdlNsaWRlciA9IG5ldyBTd2lwZXIoJyNuYXZTbGlkZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWFib3V0R2VycGV2aXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGFib3V0R2VycGV2aXJTbGlkZXIgPSBuZXcgU3dpcGVyKCcjYWJvdXRHZXJwZXZpclNsaWRlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDU0MDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFhZHZhbnRhZ2VzU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBhZHZhbnRhZ2VzU2xpZGVyID0gbmV3IFN3aXBlcignI2FkdmFudGFnZXNTbGlkZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50czoge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgNTQwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobmF2U2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZTbGlkZXIuZGVzdHJveSh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIG5hdlNsaWRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFib3V0R2VycGV2aXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGFib3V0R2VycGV2aXJTbGlkZXIuZGVzdHJveSh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGFib3V0R2VycGV2aXJTbGlkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYWR2YW50YWdlc1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgYWR2YW50YWdlc1NsaWRlci5kZXN0cm95KHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYWR2YW50YWdlc1NsaWRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVyc0luaXQoKTtcclxuXHJcbi8vU1VCLU1FTlVcclxuXHJcbiAgICAkKCcuc3ViLW1lbnVfX3RvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnc3ViLW1lbnVfX3RvZ2dsZV9hY3RpdmUnKVxyXG4gICAgfSk7XHJcblxyXG4vL0hJREUgVEVYVFxyXG4gICAgJCgnLnRleHQtaGlkZSAucmVhZC1tb3JlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBQQVJBTEFYXHJcbiAgICAkKCcubW91c2UtcGFyYWxsYXgnKS5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB4ID0gZS5jbGllbnRYIC8gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAvICQod2luZG93KS5oZWlnaHQoKTtcclxuICAgICAgICBjb25zdCAkYWN0aXZlU2VjdGlvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBjb25zb2xlLmxvZygkYWN0aXZlU2VjdGlvbik7XHJcbiAgICAgICAgJGFjdGl2ZVNlY3Rpb24uZmluZCgnLm1vdXNlLXBhcmFsbGF4X19iZycpLmNzcyhcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICAgICd0cmFuc2xhdGUoLScgKyB4ICogNTAgKyAncHgsIC0nICsgeSAqIDQwICsgJ3B4KSdcclxuICAgICAgICApO1xyXG4gICAgICAgICRhY3RpdmVTZWN0aW9uLmZpbmQoJy5tb3VzZS1wYXJhbGxheF9fYmctMicpLmNzcyhcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICAgICd0cmFuc2xhdGUoLScgKyB4ICogNDAgKyAncHgsICsnICsgeSAqIDUwICsgJ3B4KSdcclxuICAgICAgICApO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNsaWRlcnNJbml0KCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
