'use strict';

document.addEventListener('DOMContentLoaded', function (e) {
    document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 10 + 'px';
}, false); /*rem计算*/
/*$(".lazy").lazyload({
  });*/

$(function () {
    f_masonry();
    $(".j-box img").lazyload({
        effect: "fadeIn",
        failurelimit: 40,
        load: f_masonry
    });
});
function f_masonry() {
    var $container = $('.masonry');
    $container.imagesLoaded(function () {
        $container.masonry({
            itemSelector: '.box',
            isAnimated: true
        });
    });
}
"use strict";

$(function () {
    $(".j-u-list").click(function () {
        if ($(".z-toggle-list").hasClass("show")) {
            $(".z-toggle-list").slideUp(600).removeClass("show");
        } else {
            $(".z-toggle-list").slideDown(600).addClass("show");
        }
    });
});