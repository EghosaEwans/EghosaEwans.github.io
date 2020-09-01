$(document).ready(function(){

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(window).height()) {
            $('#nav-content').addClass('fixed');
            $('#home').addClass('section-padding');
        }
        else {
            $('#nav-content').removeClass('fixed');
            $('#home').removeClass('section-padding');
        }
    });


    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });

    $(".menu-icon").on('click',function(){
        $('.bar1').toggleClass('change1')
        $('.bar2').toggleClass('change2')
        $('.bar3').toggleClass('change3')
        $('.nav, .nav-display').toggleClass('nav nav-display')
      });

    $(window).on('scroll', function(){
        if($(window).scrollTop() < $(window).height()-100){
            $('.nav-color').removeClass('nav-color-click')
        } 
        else if($(window).scrollTop()+100 > $('#home').position().top && $(window).scrollTop() < $('#work-exp').position().top-100){
            $('.nav-color').removeClass('nav-color-click')
            $('#1').addClass('nav-color nav-color-click')
        }
        else if($(window).scrollTop()+100 >= $('#work-exp').position().top){
            $('.nav-color').removeClass('nav-color-click')
            $('#2').addClass('nav-color nav-color-click')
        }
        
    });

});


