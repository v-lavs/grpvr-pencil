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

    var galleryThumbs = new Swiper('.gallery-thumbs', {

        slidesPerView: 1,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
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
    $('.text-hide .read-more').on('click', function(e) {
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlRvIGluY2x1ZGUganMgZmlsZSBmcm9tIGxpYnJhcmllcyB3cml0ZTogYC8vPSBpbmNsdWRlIC4vcGF0aC10by1maWxlYFxyXG4gKiAqL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ1VTVE9NIFNDUklQVFNcclxuICoqL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIRUFERVIgU0NST0xMXHJcbiAgICAgKi9cclxuXHJcbiAgICB2YXIgc2Nyb2xsZWQ7XHJcblxyXG4gICAgZnVuY3Rpb24gb25IZWFkZXJTY3JvbGwoKSB7XHJcbiAgICAgICAgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICBpZiAoc2Nyb2xsZWQgPiA2MCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIuaGVhZGVyXCIpLmFkZENsYXNzKCdoZWFkZXJfYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmhlYWRlclwiKS5yZW1vdmVDbGFzcygnaGVhZGVyX2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG9uSGVhZGVyU2Nyb2xsKCk7XHJcbiAgICB9KTtcclxuICAgIG9uSGVhZGVyU2Nyb2xsKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNT0IgTUVOVSBTQ1JJUFRcclxuICAgICAqKi9cclxuXHJcbiAgICB2YXIgbmF2ID0gJCgnLm1haW4tbmF2Jyk7XHJcblxyXG4gICAgJCgnLmJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG5hdi5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLmJhY2tkcm9wJykuZmFkZUluKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuYnRuLWNsb3NlLCAuYmFja2Ryb3AnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBuYXYucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBqUXVlcnkoJy5iYWNrZHJvcCcpLmZhZGVPdXQoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy8gc2xpZGVyXHJcblxyXG4gICAgdmFyIG5hdlNsaWRlcjtcclxuICAgIHZhciBhYm91dEdlcnBldmlyU2xpZGVyO1xyXG4gICAgdmFyIGFkdmFudGFnZXNTbGlkZXI7XHJcblxyXG4gICAgdmFyIGdhbGxlcnlUaHVtYnMgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeS10aHVtYnMnLCB7XHJcblxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgZnJlZU1vZGU6IHRydWUsXHJcbiAgICAgICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxyXG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIHZhciBnYWxsZXJ5VG9wID0gbmV3IFN3aXBlcignLmdhbGxlcnktdG9wJywge1xyXG5cclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRodW1iczoge1xyXG4gICAgICAgICAgICBzd2lwZXI6IGdhbGxlcnlUaHVtYnNcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgYnRuU2xpZGVyID0gbmV3IFN3aXBlcignI2J0blNsaWRlcicsIHtcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2xpZGVyc0luaXQoKSB7XHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDEwNDApIHtcclxuICAgICAgICAgICAgaWYgKCFuYXZTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIG5hdlNsaWRlciA9IG5ldyBTd2lwZXIoJyNuYXZTbGlkZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWFib3V0R2VycGV2aXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGFib3V0R2VycGV2aXJTbGlkZXIgPSBuZXcgU3dpcGVyKCcjYWJvdXRHZXJwZXZpclNsaWRlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDU0MDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFhZHZhbnRhZ2VzU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBhZHZhbnRhZ2VzU2xpZGVyID0gbmV3IFN3aXBlcignI2FkdmFudGFnZXNTbGlkZXInLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50czoge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgNTQwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobmF2U2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZTbGlkZXIuZGVzdHJveSh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIG5hdlNsaWRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFib3V0R2VycGV2aXJTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGFib3V0R2VycGV2aXJTbGlkZXIuZGVzdHJveSh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGFib3V0R2VycGV2aXJTbGlkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYWR2YW50YWdlc1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgYWR2YW50YWdlc1NsaWRlci5kZXN0cm95KHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYWR2YW50YWdlc1NsaWRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVyc0luaXQoKTtcclxuXHJcbi8vU1VCLU1FTlVcclxuXHJcbiAgICAkKCcuc3ViLW1lbnVfX3RvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnc3ViLW1lbnVfX3RvZ2dsZV9hY3RpdmUnKVxyXG4gICAgfSk7XHJcblxyXG4vL0hJREUgVEVYVFxyXG4gICAgJCgnLnRleHQtaGlkZSAucmVhZC1tb3JlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAkKHRoaXMpLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFBBUkFMQVhcclxuICAgICQoJy5tb3VzZS1wYXJhbGxheCcpLm9uKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHggPSBlLmNsaWVudFggLyAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICBjb25zdCB5ID0gZS5jbGllbnRZIC8gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgIGNvbnN0ICRhY3RpdmVTZWN0aW9uID0gJChlLmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRhY3RpdmVTZWN0aW9uKTtcclxuICAgICAgICAkYWN0aXZlU2VjdGlvbi5maW5kKCcubW91c2UtcGFyYWxsYXhfX2JnJykuY3NzKFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZSgtJyArIHggKiA1MCArICdweCwgLScgKyB5ICogNDAgKyAncHgpJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgJGFjdGl2ZVNlY3Rpb24uZmluZCgnLm1vdXNlLXBhcmFsbGF4X19iZy0yJykuY3NzKFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZSgtJyArIHggKiA0MCArICdweCwgKycgKyB5ICogNTAgKyAncHgpJ1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2xpZGVyc0luaXQoKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
