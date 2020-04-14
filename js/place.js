$(function () {
    $('.menu-trigger').on('click', function () {
        // $(this).toggleClass('on');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('nav').removeClass('open');
            $('.overlay').removeClass('open');
        } else {
            $(this).addClass('active');
            $('main').addClass('open');
            $('nav').addClass('open');
            $('.overlay').addClass('open');
        }
    });
    $('.overlay').on('click', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.menu-trigger').removeClass('active');
            $('nav').removeClass('open');
        }
    });
    $(window).on('scroll', function () {
        // console.log(123);
        $('.menu-trigger').addClass('black');
    });
    // メニューバーのアクション終了


    // 画像のスライドアニメーション
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2300,
        dots: true,
        cssEase: 'linear'
    });
    // 画像のスライドアニメーション終了

});


