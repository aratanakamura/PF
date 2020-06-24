// TOP
$(function () {
    var topBtn = $(".nav_top");
    //スクロールしてトップへ戻る
    topBtn.click(function () {
        $("body,html").animate({
                scrollTop: 0,
            },
            500
        );
        return false;
    });
});
// 自己紹介
$(function () {
    var selfBtn = $(".nav_self_introduction");
    //スクロールしてトップへ戻る
    selfBtn.click(function () {
        $("body,html").animate({
                scrollTop: 700,
            },
            500
        );
        return false;
    });
});
// スキル
$(function () {
    var skillBtn = $(".nav_my_skill");
    //スクロールしてトップへ戻る
    var position3 = $(".my_skill").offset().top;
    skillBtn.click(function () {
        $(".my_skill,html").animate({
                scrollTop: position3,
            },
            500
        );
        return false;
    });
});
// ポートフォリオ
$(function () {
    var folioBtn = $(".nav_deliverable");
    //スクロールしてポートフォリオへ戻る
    var position4 = $(".service_contents").offset().top;
    folioBtn.click(function () {
        $(".service_contents,html").animate({
                scrollTop: position4,
            },
            500
        );
        return false;
    });
});
// お問い合わせ
$(function () {
    var inquiryBtn = $(".nav_inquiry_form");
    //スクロールしてお問い合わせへ戻る
    var position5 = $(".inquiry_form").offset().top;
    inquiryBtn.click(function () {
        $(".inquiry_form,html").animate({
                scrollTop: position5,
            },
            500
        );
        return false;
    });
});

// 🔝
$(function () {
    var topBtn = $(".to-top");
    //ボタンを非表示にする
    topBtn.hide();
    //スクロールしてページトップから100に達したらボタンを表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            //フェードインで表示
            topBtn.fadeIn();
        } else {
            //フェードアウトで非表示
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップへ戻る
    topBtn.click(function () {
        $("body,html").animate({
                scrollTop: 0,
            },
            500
        );
        return false;
    });
});

// スムーススクロール

var position = $("任意の要素").offset().top;

$(任意の要素).click(function () {
    $("html,body").animate({
        scrollTop: position
    }, {
        queue: false
    });
});