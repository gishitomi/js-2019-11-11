// メニューバーのアクション
$(function () {
    $('.menu-trigger').on('click', function () {
        // $(this).toggleClass('on');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('nav').removeClass('open');
            $('.overlay').removeClass('open');
            // $('.menu-trigger span').css('background-color', 'black');
        } else {
            $(this).addClass('active');
            $('main').addClass('open');
            $('nav').addClass('open');
            $('.overlay').addClass('open');
            // $('.menu-trigger span').css('background-color', 'white');
        }
    });
    $('.overlay').on('click', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.menu-trigger').removeClass('active');
            $('nav').removeClass('open');
        }
    });
    // $(window).on('scroll', function () {
    //     // console.log(123);
    //     $('.menu-trigger').addClass('black');
    // });
    // メニューバーのアクション終了

    // スクロールに応じたフェードイン
    $(window).scroll(function () {
        $('.fadein').each(function () {
            var elemPos = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
            // ここからスクロールされたときの処理
            if (scroll > elemPos - windowHeight + 100) {
                $(this).addClass('scrollin');
            }
        });
    });
    // スクロールに応じたフェードイン終了

    // スクロールさせた時ハンバーガーメニューの色を変える
    $(window).scroll(function () {
        $('.box02').each(function () {
            var elemPos = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
            // ここからスクロールされたときの処理
            if (scroll > elemPos - windowHeight) {
                $('.menu-trigger span').css('background-color', 'black');
            }
            // 元に戻す
            else if (scroll < elemPos - windowHeight) {
                $('.menu-trigger span').css('background-color', 'white');
            }
        });
    });
    // スクロールさせた時ハンバーガーメニューの色を変える終了



    // 画面上に表示されるとこまでスクロールしたときのアニメーション
    // $(window).scroll(function () {
    //     $('.fadein').each(function () {
    //         var elemPos = $(this).offset().top,
    //             scroll = $(window).scrollTop(),
    //             windowHeight = $(window).height();
    //         // ここからスクロールされたときの処理
    //         if (scroll > elemPos - windowHeight + 100) {
    //             $(function () {
    //                 setTimeout(rect()); //アニメーションを実行
    //             });

    //             function rect() {
    //                 $("#rect").animate({
    //                     opacity: ".3"
    //                 }, 2000).animate({
    //                     opacity: "1"
    //                 }, 2000);
    //                 setTimeout("rect()", 4000); //アニメーションを繰り返す間隔
    //             }
    //         }
    //     });
    // });
    // 画面上に表示されるとこまでスクロールしたときのアニメーション終了

    // 下線を引っ張るアニメーション
    $(function () {
        $(window).scroll(function () {
            var windowHeight = $(window).height();
            var windowTop = $(window).scrollTop();
            $(".underline").each(function () {
                var objectImage = $(this).offset().top;
                if (windowTop > objectImage - windowHeight * 1 / 2) { $(this).css("background-size", "100% 100%") };
            });
        });
    });
    // 下線を引っ張るアニメーション終了


    // 波動ライブラリ
    let $hoge = $('.main-img');
    $hoge.ripples({
        resolution: 400,
        dropRadius: 25,
        perturbance: 0.05
    });
    // 波動ライブラリ終了

    //雪を降らせるライブラリ
    $(document).snowfall({
        flakeCount: 40,

        minSize: 10,    // 雪の最小サイズ
        maxSize: 20,    // 雪の最大サイズ
        minSpeed: 1,    // 雪の最低速度
        maxSpeed: 3,    // 雪の最高速度
        round: true, // 雪の形を丸くする
        // shadow: true, // 雪に影をつける
        flakeColor: "white", // 雪の色を指定
        // image: "https://lib.tree-web.net/image/sakura_hanabira3.png"
    });
    // 雪を降らせるライブラリ終了

    // ページトップに戻る

    $("html,body").animate({ scrollTop: $('header').offset().top });
    // ページトップに戻る終了
});

