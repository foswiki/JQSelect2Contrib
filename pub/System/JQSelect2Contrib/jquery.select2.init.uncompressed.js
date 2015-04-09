// initializer for the select2 plugin
jQuery(function($) {
  var defaults = {};

  $(".jqSelect2:not(.jqSelect2Inited)").livequery(function() {
    var $this = $(this), opts = $.extend({}, defaults, $this.metadata(), $this.data());
    $this.addClass("jqSelect2Inited").select2(opts);
  });
});
