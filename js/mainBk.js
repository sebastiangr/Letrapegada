$(document).ready( function() {

    var $root = $('html, body');
    var $height = $(window).height() - 85;
    var $width = $(window).width();

    var heightP = $(window).height() * 0.8;

    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.goto-top');



    // $('a').click(function() {
    //     $root.animate({
    //         scrollTop: $( $.attr(this, 'href') ).offset().top
    //     }, 600);
    //     return false;
    // });


    // MENUBAR APPEAR ON SCROLL
    $(window).scroll(function(){
        if ($(this).scrollTop() > $height) {
            $('#navigation').fadeIn(400);
            // $('#navigation').slideDown(600);
        } else {
            $('#navigation').fadeOut(400);
            // $('#navigation').slideUp(400);
        }
    });


    // NORMAL NAVIGATION
    var sections = $('.section')
      , nav = $('nav#navigation')
      , nav_height = nav.outerHeight();

    // nav.find('a').on('click', function () {
    //     var $menuItem = $(this)
    //     , id = $menuItem.attr('href');

    //     $root.animate({
    //         scrollTop: $(id).offset().top - nav_height
    //     }, 600);

    //     return false;
    // });


    // GO TO LINKS

    $('a').click(function() {

        if($(this).hasClass('goto-top')){
            event.preventDefault();
            $root.animate({
                scrollTop: 0 ,
                }, scroll_top_duration
            );
        } else {

            $root.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top  - nav_height
            }, 600);
            return false;

        }
    });

    // $('a').click(function() {

    //     $root.animate({
    //         scrollTop: $( $.attr(this, 'href') ).offset().top  - nav_height
    //     }, 600);
    //     return false;
    // });




    // MOBILE NAVIGATION
    var navMob = $('.overlay-mobile');

    navMob.find('a').on('click', function () {
        var $menuItem = $(this)
        , id = $menuItem.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 600);

        navMob.fadeOut(500);
        $("#bt-menu-mobile").removeClass("close-bt-hamburguer");

        return false;
    });


    // SCROLL ACTIVE MENU ITEMS
    $(window).on('scroll', function () {
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
    });


    // MENU MOBILE ÍCONO
    $("#bt-menu-mobile").click(function(){
        if($(this).hasClass("close-bt-hamburguer")){
            $('.overlay-mobile').fadeOut(400);
            // $('.overlay-mobile').slideUp(500);
            // aparecer logo al salir de mobile
            $('.logoSticky').fadeIn(200);
            $(this).removeClass("close-bt-hamburguer");
        }
        else
        {
            // $('.overlay-mobile').fadeIn(500);
            $('.overlay-mobile').slideDown(400);
            // quitar logo al entrar en menú mobile
            $('.logoSticky').fadeOut(200);
            $(this).addClass("close-bt-hamburguer");
        }

        return false;
    });


    // CSS3 ON SCROLL
    $(window).scroll(function() {
        $('.title').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
                $(this).addClass("fadeInUp");
            }
        });

        $('.fadeScroll').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+heightP) {
                $(this).addClass("fadeInUpShow");
            }
        });

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






    // GO TOP


    //hide or show the "back to top" link
    $(window).scroll(function(){

        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cd-fade-out');
        }

    });

    //smooth scroll to top
    // $back_to_top.on('click', function(event){

    //     event.preventDefault();
    //     $('body,html').animate({
    //         scrollTop: 0 ,
    //         }, scroll_top_duration
    //     );

    // });









    // $(window).bind('mousewheel', function(event) {
    //     if (event.originalEvent.wheelDelta >= 0) {

    //         // SCROLL UP
    //         console.log('Scroll: UP ' + 'Position: ' + $(document).scrollTop());
    //         // WHEN HEIGHT OF SCREEN IS REACHED
    //         // if ($(this).scrollTop() < $('#portfolio').offset().top) {
    //         //     $root.animate({
    //         //         scrollTop: $('#home').offset().top}, 500);
    //         // }

    //     }
    //     else {

    //         // SCROLL DOWN
    //         console.log('Scroll: DOWN ' + 'Position: ' + $(document).scrollTop());
    //         // WHEN HEIGHT OF SCREEN IS REACHED
    //         //&& $(this).scrollTop() < $height
    //         // if ($(this).scrollTop() > 0) {
    //         //     if ($test == 0) {
    //         //         $root.animate({
    //         //             scrollTop: $('#portfolio').offset().top}, 500);
    //         //         $test = 1;
    //         //     }
    //         // }
    //     }
    // });

});