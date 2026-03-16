// initializer for the select2 plugin
"use strict";
jQuery(function($) {
  var defaults = {
    dropdownCssClass: 'ui-dialog',
    sortable: false
  };

  $(".jqSelect2:not(.inited)").livequery(function() {
    var $elem = $(this), 
        opts = $.extend({}, defaults, $elem.data());

    $elem.addClass("inited").select2(opts);

    $elem.on("reset", function() {
      $elem.find(":selected:first").each(function() {
        var $option = $(this),
          val = $option.val() || $option.attr("value") || $option.text();
        $elem.select2("val", val);
      });
    });

    if (opts.sortable) {
      $elem.select2("container").find("ul.select2-choices").sortable({
        containment: 'parent',
        items: "> .select2-search-choice",
        start: function() { $input.select2('onSortStart'); },
        update: function() { $input.select2('onSortEnd'); }
      });
    }
  });
});
