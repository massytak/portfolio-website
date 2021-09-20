(function($) {
    "use strict";
    var NAY = {};
    NAY.MenuTogglerClose = function() {
        $(".toggler-menu").on("click", function() {
            $(".header-left").stop().toggleClass("menu-open");
        });
        $(".nav-link").on("click", function() {
            $(".header-left").stop().toggleClass("menu-open");
        });
        $(".header-left a").on("click", function() {
            var toggle = $(".toggler-menu");
        });
    };
    $(document).on("ready", function() {
        NAY.MenuTogglerClose()
    })
})(jQuery);

$(".circle_percent").each(function() {
    var $this = $(this),
        $dataV = $this.data("percent"),
        $dataDeg = $dataV * 3.6,
        $round = $this.find(".round_per");
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
    $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
    $this.prop('Counter', 0).animate({ Counter: $dataV }, {
        duration: 2000,
        easing: 'swing',
        step: function(now) {
            $this.find(".percent_text").text(Math.ceil(now) + "%");
        }
    });
    if ($dataV >= 51) {
        $round.css("transform", "rotate(" + 360 + "deg)");
        setTimeout(function() {
            $this.addClass("percent_more");
        }, 1000);
        setTimeout(function() {
            $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
        }, 1000);
    }
});

$(document).ready(function($) {
    function animateElements() {
        $('.progressbar').each(function() {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    // startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 200,
                    thickness: 15,
                    fill: {
                        color: '#792f3a'
                    }
                }).on('circle-animation-progress', function(event, progress, stepValue) {
                    $(this).find('strong').text((stepValue * 100).toFixed(0) + "%");
                }).stop();
            }
        });
    }

    animateElements();
    $(window).scroll(animateElements);
});