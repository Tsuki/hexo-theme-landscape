/**
 * Created by Alicex on 6/11/16.
 */
(function ($) {
  var setTagsColor = function () {
    var tags = $(".tagcloud a");
    for (var i = 0; i < tags.length; i++) {
      var num = Math.floor(Math.random() * 7);
      tags.eq(i).addClass("color" + num);
    }
    $(".article-category a:nth-child(-n+2)").attr("class", "color0");
  };
  setTagsColor();
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return
  }
  $(document).on('pjax:success', function () {
    $.getScript('/js/script.js')
  });
  var pjax = new Pjax({
    debug: true,
    elements: ['a'],
    selectors: [
      'title',
      '#main',
      '.js-Pjax'
    ]
  });
  // console.log('pjax inited', pjax)

})(jQuery);