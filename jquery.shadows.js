(function($)
{
  $.fn.castShadows = function(selector, color, blur)
  {
    var sx = $(this).offset().left;
    var sy = $(this).offset().top;
    var sf = $(this).css('z-index') / $('body').width();

    $(selector).each(function()
    {
      var ox = ($(this).offset().left - sx) * sf;
      var oy = ($(this).offset().top - sy) * sf;

      $(this).css({
        '-webkit-box-shadow': color + ' ' + ox + 'px ' + oy + 'px ' + blur
      , '-khtml-box-shadow': color + ' ' + ox + 'px ' + oy + 'px ' + blur
      , '-moz-box-shadow': color + ' ' + ox + 'px ' + oy + 'px ' + blur
      , '-o-box-shadow': color + ' ' + ox + 'px ' + oy + 'px ' + blur
      , 'box-shadow': color + ' ' + ox + 'px ' + oy + 'px ' + blur
      });
    });
  };
})(jQuery);
