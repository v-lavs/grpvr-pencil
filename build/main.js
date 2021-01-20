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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlRvIGluY2x1ZGUganMgZmlsZSBmcm9tIGxpYnJhcmllcyB3cml0ZTogYC8vPSBpbmNsdWRlIC4vcGF0aC10by1maWxlYFxyXG4gKiAqL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ1VTVE9NIFNDUklQVFNcclxuICoqL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIRUFERVIgU0NST0xMXHJcbiAgICAgKi9cclxuXHJcbiAgICB2YXIgc2Nyb2xsZWQ7XHJcblxyXG4gICAgZnVuY3Rpb24gb25IZWFkZXJTY3JvbGwoKSB7XHJcbiAgICAgICAgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICBpZiAoc2Nyb2xsZWQgPiA2MCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIuaGVhZGVyXCIpLmFkZENsYXNzKCdoZWFkZXJfYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmhlYWRlclwiKS5yZW1vdmVDbGFzcygnaGVhZGVyX2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG9uSGVhZGVyU2Nyb2xsKCk7XHJcbiAgICB9KTtcclxuICAgIG9uSGVhZGVyU2Nyb2xsKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNT0IgTUVOVSBTQ1JJUFRcclxuICAgICAqKi9cclxuXHJcbiAgICB2YXIgbmF2ID0gJCgnLm1haW4tbmF2Jyk7XHJcblxyXG4gICAgJCgnLmJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG5hdi5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLmJhY2tkcm9wJykuZmFkZUluKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuYnRuLWNsb3NlLCAuYmFja2Ryb3AnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBuYXYucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBqUXVlcnkoJy5iYWNrZHJvcCcpLmZhZGVPdXQoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy8gc2xpZGVyXHJcblxyXG4gICAgdmFyIGFkdmFudGFnZXNTbGlkZXI7XHJcbiAgICB2YXIgZ3ltbmFzdGljU2xpZGVyO1xyXG4gICAgdmFyIHF1ZXN0aW9uc1NsaWRlcjtcclxuXHJcbiAgICBmdW5jdGlvbiBzbGlkZXJzSW5pdCgpIHtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTA0MCkge1xyXG4gICAgICAgICAgICBpZiAoIWFkdmFudGFnZXNTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGFkdmFudGFnZXNTbGlkZXIgPSBuZXcgU3dpcGVyKCcjYWR2YW50YWdlc1NsaWRlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRFbDogJy5iZy1zbGlkZXItYWR2YW50YWdlcyAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkVsOiAnLmJnLXNsaWRlci1hZHZhbnRhZ2VzIC5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWd5bW5hc3RpY1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgZ3ltbmFzdGljU2xpZGVyID0gbmV3IFN3aXBlcignI2d5bW5hc3RpY1NsaWRlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0RWw6ICcubmF2aWdhdGlvbi1neW1uYXN0aWMtbGlzdCAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkVsOiAnLm5hdmlnYXRpb24tZ3ltbmFzdGljLWxpc3QgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcXVlc3Rpb25zU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbnNTbGlkZXIgPSBuZXcgU3dpcGVyKCcjcXVlc3Rpb25zU2xpZGVyJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0RWw6ICcucXVlc3Rpb24tbGlzdC13cmFwIC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2RWw6ICcucXVlc3Rpb24tbGlzdC13cmFwIC5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChhZHZhbnRhZ2VzU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBhZHZhbnRhZ2VzU2xpZGVyLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBhZHZhbnRhZ2VzU2xpZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ3ltbmFzdGljU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBneW1uYXN0aWNTbGlkZXIuZGVzdHJveSh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGd5bW5hc3RpY1NsaWRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uc1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zU2xpZGVyLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbnNTbGlkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlcnNJbml0KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RXF1YWxIZWlnaHQoKSB7XHJcbiAgICAgICAgdmFyIG1heF9jYXJkX2hlaWdodCA9IDA7XHJcbiAgICAgICAgdmFyICRhZHZhbnRhZ2VzQ2FyZHMgPSAkKCcucXVlc3Rpb24tbGlzdF9faXRlbScpO1xyXG4gICAgICAgICRhZHZhbnRhZ2VzQ2FyZHMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhlaWdodCgpID4gbWF4X2NhcmRfaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBtYXhfY2FyZF9oZWlnaHQgPSAkKHRoaXMpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJGFkdmFudGFnZXNDYXJkcy5jc3Moe21pbkhlaWdodDogJCh3aW5kb3cpLndpZHRoKCkgPiAxMDQwID8gbWF4X2NhcmRfaGVpZ2h0IDogJ2F1dG8nfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXF1YWxIZWlnaHQoKTtcclxuXHJcbi8vU1VCLU1FTlVcclxuXHJcbiAgICAkKCcuc3ViLW1lbnVfX3RvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnc3ViLW1lbnVfX3RvZ2dsZV9hY3RpdmUnKVxyXG4gICAgfSk7XHJcblxyXG4vL0hJREUgVEVYVFxyXG4gICAgJCgnLnRleHQtaGlkZSAucmVhZC1tb3JlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAkKHRoaXMpLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzbGlkZXJzSW5pdCgpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
