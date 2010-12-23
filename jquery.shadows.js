(function($)
{
  $.fn.castShadows = function(selector, color, height, blur)
  {
    var sx = $(this).offset().left;
    var sy = $(this).offset().top;

    $(selector).each(function()
    {
      var z = ($(this).css('z-index') == 'auto' ? 0 : $(this).css('z-index') * height);
      var ox = $(this).offset().left - sx;
      var oy = $(this).offset().top - sy;
      var sox = (ox / $(this).width());
      var soy = (oy / $(this).height());

      var shadow =
        (sox + z) + 'px '
      + (soy + z) + 'px '
      + ((Math.abs(ox) / $(this).width()) + (Math.abs(oy) / $(this).height()) * blur) + 'px '
      + -z + 'px '
      + color + ' '
      ;

      $(this).css({
        '-webkit-box-shadow': shadow
      , '-khtml-box-shadow': shadow
      , '-moz-box-shadow': shadow
      , '-o-box-shadow': shadow
      , 'box-shadow': shadow
      });
    });
  };
})(jQuery);
