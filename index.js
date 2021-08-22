(function ($) {
  "use strict";
  var NAY = {};
  NAY.MenuTogglerClose = function () {
    $(".toggler-menu").on("click", function () {
      $(".header-left").stop().toggleClass("menu-open");
    });
    $(".header-left a").on("click", function () {
      var toggle = $(".toggler-menu");
    });
  };
  $(document).on("ready",function(){
      NAY.MenuTogglerClose()
  })
})(jQuery);
