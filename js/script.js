window.addEventListener("scroll", function () {
    // ヘッダーを変数の中に格納する
    const header = document.querySelector(".header");
    const header_btn = document.querySelector(".header-btn")
    // 100px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
    header.classList.toggle("header-active", window.scrollY > 220);
    header_btn.classList.toggle("header-btn-active", window.scrollY > 220);
});

$(function () {
    $('.ts-p').on('click', function () {
        $('.ts-p').removeClass('active');
        $('.member').removeClass('is_show')
        $('.ts-p').removeClass('ts-p-active');

        $(this).addClass('active');
        $(this).addClass('ts-p-active')

        var index = $('.ts-p').index(this);
        $('.member').eq(index).addClass('is_show');
    });
});


const swiper = new Swiper(".swiper", {
    // ページネーションが必要なら追加
    pagination: {
        el: ".swiper-pagination"
    },
    loop: true,
    // ナビボタンが必要なら追加
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

$(function () {
    var pagetop = $('#page_top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});

//アコーディオンをクリックした時の動作
$('.title').on('click', function () {//タイトル要素をクリックしたら
    var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作

    if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
        $(this).removeClass('close');//クラス名を除去し
        $(this).removeClass('active');
    } else {//それ以外は
        $(this).addClass('close');//クラス名closeを付与
        $(this).addClass('active');
    }
});

$('.img-cont').hide().fadeIn(800);

$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll_up, .scroll_left , .scroll_right');
    var scrollAnimationFunc = function () {
        for (var i = 0; i < scrollAnimationElm.length; i++) {
            var triggerMargin = 200;
            if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
                scrollAnimationElm[i].classList.add('on');
            }
            console.log(window.innerHeight);
            console.log(scrollAnimationElm[i]);
            console.log(scrollAnimationElm[i].getBoundingClientRect().top)
        }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
});

function BgFadeAnime() {

    // 背景色が伸びて出現（左から右）
    $('.bgLRextendTrigger').each(function () { //bgLRextendTriggerというクラス名が
        var elemPos = $(this).offset().top - 50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
        } else {
            $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
        }
    });

    // 文字列を囲う子要素
    $('.bgappearTrigger').each(function () { //bgappearTriggerというクラス名が
        var elemPos = $(this).offset().top - 50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
        } else {
            $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
        }
    });
}
$(window).scroll(function () {
    BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
