$(document).ready(function () {

    $('select').niceSelect();

    $('.num-input').on('input', function() {
        $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
    });

    $('[data-fancybox]').fancybox({
        autoFocus: false,
    });

    new fullpage('#fullpage', {
        navigation: true,
		navigationPosition: 'left',
        responsiveWidth: '1200',
        scrollingSpeed: 850,
        onLeave: function(origin, destination, direction){
            var destinationSection = destination.item;
            if (direction == 'down') {
                if ($(destinationSection).hasClass('white-section')) {
                    setTimeout(function(){
                        $('.header').addClass('dark');
                        $('#logoWhite').css('display', 'none');
                        $('#logoBlack').css('display', 'block');
                    },450)
                }else{
                    setTimeout(function(){
                        $('.header').removeClass('dark');
                        $('#logoBlack').css('display', 'none');
                        $('#logoWhite').css('display', 'block');
                    },450)
                }
            }else{
                if ($(destinationSection).hasClass('white-section')) {
                    $('.header').addClass('dark');
                    $('#logoWhite').css('display', 'none');
                    $('#logoBlack').css('display', 'block');
                }else{
                    $('.header').removeClass('dark');
                    $('#logoBlack').css('display', 'none');
                    $('#logoWhite').css('display', 'block');
                }
            }
    
        }
    });

    if ($(window).width() >= 992) {
        // var firstBlockScene = document.getElementById('first_block_parallax');
        // var parallaxInstance = new Parallax(firstBlockScene);
    }

    // var newsSlider = new Swiper('.index-events__slider', {
    //     speed: 450,
    //     slidesPerView: 3,
    //     spaceBetween: 40,
    //     loop: true,
    //     pagination: {
    //         el: '.index-events__slider .slider-pagination',
    //         clickable: true,
    //         bulletActiveClass: "active",
    //     },
    //     navigation: {
    //         prevEl: '.index-events__slider .slider-button-prev',
    //         nextEl: '.index-events__slider .slider-button-next',
    //     },
    //     breakpoints: {
    //         0: {
    //             slidesPerView: 1,
    //         },
    //         576: {
    //             slidesPerView: 2,
    //         },
    //         992: {
    //             slidesPerView: 3,
    //         },
    //     },
    // });

})