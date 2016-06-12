/**
 * Created by Alicex on 6/11/16.
 */
(function ($) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return
  }
  $(document).on('pjax:success', function () {
    $.getScript('/js/script.js')
  });
  var pjax = new Pjax({
    elements: ['a'],
    selectors: [
      'title',
      '#main',
      '.js-Pjax'
    ]
  });
})(jQuery);