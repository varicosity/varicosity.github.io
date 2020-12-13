"use strict";$(document).on("ready",function(){});var landState={menuIsOpened:!1};$(".nav-btn").on("click",function(){0==landState.menuIsOpened?($(".nav-main").addClass("show"),landState.menuIsOpened=!0):($(".nav-main").removeClass("show"),landState.menuIsOpened=!1)});
$('.comment-form').on('submit', function(evt) {
    evt.preventDefault();
    return false;
});
(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(70031239, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});