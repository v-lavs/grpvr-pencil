/**
 *To include js file from libraries write: `//= include ./path-to-file`
 * */
//= include ../../node_modules/jquery/dist/jquery.js ;

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


    $('.reason-icon__list .reason-icon__item').click(function (e) {
        e.preventDefault();
        $(this).parent().find('.reason-icon__item').removeClass('active_icon');
        $(this).addClass('active_icon');
        var title = $(this).attr('data-title');

        var result_block = $(this).parents('.round_big');
        result_block.find('#reasonsResult').html(title);
    });


    // SMOOTH SCROLL TO ANCHOR

    function smoothScrollToAnchor(selector) {
        $(selector).on('click', function (event) {
            var anchor = $.attr(this, 'href');

            if (anchor.match(/^#/) && anchor !== '#') {
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 100
                }, 2000);
            }
        });
    }

    smoothScrollToAnchor('#requestDemo');
    smoothScrollToAnchor('.main-nav .main-nav__link');


//    ANIMATION

    let slideInRight = new Waypoint({
        element: document.querySelector('.section-about .section__thumb'),
        handler: function (direction) {
            this.element.classList.add('active_anim');
            console.log(this.element)
        },
        offset: '60%'
    });

    document.querySelectorAll('.slide-in-right').forEach((el) => {
        new Waypoint({
            element: el,
            handler: function (direction) {
                this.element.classList.add('active');
            },
            offset: '70%'
        });
    });

    document.querySelectorAll('.slide-in-left').forEach((el) => {
        new Waypoint({
            element: el,
            handler: function (direction) {
                this.element.classList.add('active');
            },
            offset: '70%'
        });
    });

    document.querySelectorAll('.zoom-in').forEach((el) => {
        new Waypoint({
            element: el,
            handler: function (direction) {
                this.element.classList.add('active');
            },
            offset: '70%'
        });
    });

    //STICKY BTN

    var sticky = new Waypoint({
        element: $('#triggerWhereBay')[0],
        offset: '50%',
        handler: function (direction) {
            console.log(direction === 'down', direction)
            if (direction === 'down') {
                $('.where-buy').addClass('stuck');
            } else if (direction === 'up') {
                $('.where-buy').removeClass('stuck');
            }
        },
    })


//    CANVAS

    "use strict";

    function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
                return typeof obj;
            };
        } else {
            _typeof = function _typeof(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }
        return _typeof(obj);
    }

    function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
            return !!right[Symbol.hasInstance](left);
        } else {
            return left instanceof right;
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!_instanceof(instance, Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    var canvas, ctx;
    var render, init;
    var blob;

    var Blob = /*#__PURE__*/function () {
        function Blob() {
            _classCallCheck(this, Blob);

            this.points = [];
        }

        _createClass(Blob, [{
            key: "init",
            value: function init() {
                for (var i = 0; i < this.numPoints; i++) {
                    var point = new Point(this.divisional * (i + 1), this); // point.acceleration = -1 + Math.random() * 2;

                    this.push(point);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var canvas = this.canvas;
                var ctx = this.ctx;
                var position = this.position;
                var pointsArray = this.points;
                var radius = this.radius;
                var points = this.numPoints;
                var divisional = this.divisional;
                var center = this.center;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                pointsArray[0].solveWith(pointsArray[points - 1], pointsArray[1]);
                var p0 = pointsArray[points - 1].position;
                var p1 = pointsArray[0].position;
                var _p2 = p1;
                ctx.beginPath();
                ctx.moveTo(center.x, center.y);
                ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

                for (var i = 1; i < points; i++) {
                    pointsArray[i].solveWith(pointsArray[i - 1], pointsArray[i + 1] || pointsArray[0]);
                    var p2 = pointsArray[i].position;
                    var xc = (p1.x + p2.x) / 2;
                    var yc = (p1.y + p2.y) / 2;
                    ctx.quadraticCurveTo(p1.x, p1.y, xc, yc); // ctx.lineTo(p2.x, p2.y);

                    ctx.fillStyle = '#ff5400'; // ctx.fillRect(p1.x-2.5, p1.y-2.5, 5, 5);

                    p1 = p2;
                }

                var xc = (p1.x + _p2.x) / 2;
                var yc = (p1.y + _p2.y) / 2;
                ctx.quadraticCurveTo(p1.x, p1.y, xc, yc); // ctx.lineTo(_p2.x, _p2.y);
                // ctx.closePath();

                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.strokeStyle = '#ff5400'; // ctx.stroke();

                /*
                    ctx.fillStyle = '#000000';
                    if(this.mousePos) {
                      let angle = Math.atan2(this.mousePos.y, this.mousePos.x) + Math.PI;
                      ctx.fillRect(center.x + Math.cos(angle) * this.radius, center.y + Math.sin(angle) * this.radius, 5, 5);
                    }
                */

                requestAnimationFrame(this.render.bind(this));
            }
        }, {
            key: "push",
            value: function push(item) {
                if (_instanceof(item, Point)) {
                    this.points.push(item);
                }
            }
        }, {
            key: "color",
            set: function set(value) {
                this._color = value;
            },
            get: function get() {
                return this._color || '#ff5400';
            }
        }, {
            key: "canvas",
            set: function set(value) {
                if (_instanceof(value, HTMLElement) && value.tagName.toLowerCase() === 'canvas') {
                    this._canvas = canvas;
                    this.ctx = this._canvas.getContext('2d');
                }
            },
            get: function get() {
                return this._canvas;
            }
        }, {
            key: "numPoints",
            set: function set(value) {
                if (value > 2) {
                    this._points = value;
                }
            },
            get: function get() {
                return this._points || 32;
            }
        }, {
            key: "radius",
            set: function set(value) {
                if (value > 0) {
                    this._radius = value;
                }
            },
            get: function get() {
                return this._radius || 250;
            }
        }, {
            key: "position",
            set: function set(value) {
                if (_typeof(value) == 'object' && value.x && value.y) {
                    this._position = value;
                }
            },
            get: function get() {
                return this._position || {
                    x: 0.5,
                    y: 0.5
                };
            }
        }, {
            key: "divisional",
            get: function get() {
                return Math.PI * 2 / this.numPoints;
            }
        }, {
            key: "center",
            get: function get() {
                return {
                    x: this.canvas.width * this.position.x,
                    y: this.canvas.height * this.position.y
                };
            }
        }, {
            key: "running",
            set: function set(value) {
                this._running = value === true;
            },
            get: function get() {
                return this.running !== false;
            }
        }]);

        return Blob;
    }();

    var Point = /*#__PURE__*/function () {
        function Point(azimuth, parent) {
            _classCallCheck(this, Point);

            this.parent = parent;
            this.azimuth = Math.PI - azimuth;
            this._components = {
                x: Math.cos(this.azimuth),
                y: Math.sin(this.azimuth)
            };
            this.acceleration = -0.3 + Math.random() * 0.6;
        }

        _createClass(Point, [{
            key: "solveWith",
            value: function solveWith(leftPoint, rightPoint) {
                this.acceleration = (-0.3 * this.radialEffect + (leftPoint.radialEffect - this.radialEffect) + (rightPoint.radialEffect - this.radialEffect)) * this.elasticity - this.speed * this.friction;
            }
        }, {
            key: "acceleration",
            set: function set(value) {
                if (typeof value == 'number') {
                    this._acceleration = value;
                    this.speed += this._acceleration * 2;
                }
            },
            get: function get() {
                return this._acceleration || 0;
            }
        }, {
            key: "speed",
            set: function set(value) {
                if (typeof value == 'number') {
                    this._speed = value;
                    this.radialEffect += this._speed * 5;
                }
            },
            get: function get() {
                return this._speed || 0;
            }
        }, {
            key: "radialEffect",
            set: function set(value) {
                if (typeof value == 'number') {
                    this._radialEffect = value;
                }
            },
            get: function get() {
                return this._radialEffect || 0;
            }
        }, {
            key: "position",
            get: function get() {
                return {
                    x: this.parent.center.x + this.components.x * (this.parent.radius + this.radialEffect),
                    y: this.parent.center.y + this.components.y * (this.parent.radius + this.radialEffect)
                };
            }
        }, {
            key: "components",
            get: function get() {
                return this._components;
            }
        }, {
            key: "elasticity",
            set: function set(value) {
                if (typeof value === 'number') {
                    this._elasticity = value;
                }
            },
            get: function get() {
                return this._elasticity || 0.001;
            }
        }, {
            key: "friction",
            set: function set(value) {
                if (typeof value === 'number') {
                    this._friction = value;
                }
            },
            get: function get() {
                return this._friction || 0.0085;
            }
        }]);

        return Point;
    }();

    blob = new Blob();

    init = function init() {

        var wrapBlobEffect = document.querySelector('.section__blob-effect');
        canvas = document.createElement('canvas');
        canvas.setAttribute('touch-action', 'none');
        wrapBlobEffect.appendChild(canvas);

        var resize = function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();
        var oldMousePoint = {
            x: 0,
            y: 0
        };
        var hover = false;

        var mouseMove = function mouseMove(e) {
            var pos = blob.center;
            var diff = {
                x: e.clientX - pos.x,
                y: e.clientY - pos.y
            };
            var dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
            var angle = null;
            blob.mousePos = {
                x: pos.x - e.clientX,
                y: pos.y - e.clientY
            };

            if (dist < blob.radius && hover === false) {
                var vector = {
                    x: e.clientX - pos.x,
                    y: e.clientY - pos.y
                };
                angle = Math.atan2(vector.y, vector.x);
                hover = true; // blob.color = '#77FF00';
            } else if (dist > blob.radius && hover === true) {
                var _vector = {
                    x: e.clientX - pos.x,
                    y: e.clientY - pos.y
                };
                angle = Math.atan2(_vector.y, _vector.x);
                hover = false;
                blob.color = null;
            }

            if (typeof angle == 'number') {
                var nearestPoint = null;
                var distanceFromPoint = 100;
                blob.points.forEach(function (point) {
                    if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
                        // console.log(point.azimuth, angle, distanceFromPoint);
                        nearestPoint = point;
                        distanceFromPoint = Math.abs(angle - point.azimuth);
                    }
                });

                if (nearestPoint) {
                    var strength = {
                        x: oldMousePoint.x - e.clientX,
                        y: oldMousePoint.y - e.clientY
                    };
                    strength = Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10;
                    if (strength > 100) strength = 100;
                    nearestPoint.acceleration = strength / 100 * (hover ? -1 : 1);
                }
            }

            oldMousePoint.x = e.clientX;
            oldMousePoint.y = e.clientY;
        }; // window.addEventListener('mousemove', mouseMove);


        window.addEventListener('pointermove', mouseMove);
        blob.canvas = canvas;
        blob.init();
        blob.render();


    };

    init();
});


