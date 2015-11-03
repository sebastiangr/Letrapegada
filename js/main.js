$(document).ready( function() {

    var $root = $('html, body');
    var height = $(window).height() - 85;
    var width = $(window).width();
    var heightP = $(window).height() * 0.8;
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300;
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    var offset_opacity = 1200;
    //duration of the top scrolling animation (in ms)
    var scroll_top_duration = 700;
    //grab the "back to top" link
    var $back_to_top = $('.goTop');

    // NORMAL NAVIGATION
    var sections = $('.section');
    var nav = $('nav#navigation');
    var nav_height = nav.outerHeight();

    // MOBILE NAVIGATION
    var navMob = $('.overlay-mobile');
    var $btnmobile = $("#bt-menu-mobile");



    $(window).scroll(function(){

        // MENUBAR APPEAR ON SCROLL
        if ($(this).scrollTop() > height) {
            $('#navigation').fadeIn(400);
            // $('#navigation').slideDown(600);
        } else {
            $('#navigation').fadeOut(400);
            // $('#navigation').slideUp(400);
        }


        // SCROLL ACTIVE MENU ITEMS - navigate through menú
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                // sections.removeClass('active');

                // $(this).addClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });


        // GO TOP
        //hide or show the "back to top" link
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cd-fade-out');
        }


        // CSS3 ON SCROLL

        // FADEINUP
        $('.title').each(function(){

            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow+600) {
                $(this).addClass("fadeInUp");
            }
        });

        // FADESCROLL
        $('.fadeScroll').each(function(){

            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow+heightP) {
                $(this).addClass("fadeInUpShow");
            }
        });

        // Animate X below titles
        $('.part-1').each(function(){

            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow+800) {
                $(this).addClass("rotateA");
            }
        });

        $('.part-2').each(function(){

            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow+800) {
                $(this).addClass("rotateB");
            }
        });

    });



    // GO TO LINKS
    $('a').click(function() {

        // CAMBIAR POR UN CASE

        if($(this).hasClass('goTop')){

            // GOTO TOP LINK
            event.preventDefault();
            $root.animate({
                scrollTop: 0 ,
                }, scroll_top_duration
            );

        } else if($(this).hasClass('mobile-anchor')) {

            // MOBILE NAVIGATION
            $root.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 600);

            navMob.fadeOut(500);
            $("#bt-menu-mobile").removeClass("close-bt-hamburguer");

            return false;

        } else {

            // DESKTOP MENU NAVIGATION
            $root.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top  - nav_height
            }, 600);
            return false;

        }
    });


    // MENU MOBILE ÍCONO HAMBURGUER
    $btnmobile.click(function(){
        if($(this).hasClass("close-bt-hamburguer")){
            navMob.fadeOut(400);
            // aparecer logo al salir de mobile
            $('.logoSticky').fadeIn(200);
            $(this).removeClass("close-bt-hamburguer");
        }
        else
        {
            navMob.slideDown(400);
            // quitar logo al entrar en menú mobile
            $('.logoSticky').fadeOut(200);
            $(this).addClass("close-bt-hamburguer");
        }

        return false;
    });


});