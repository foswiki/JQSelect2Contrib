// initializer for the select2 plugin
"use strict";
jQuery(function($) {
  var defaults = {
    dropdownCssClass: 'ui-dialog',
    sortable: false
  };

  $(".jqSelect2:not(.inited)").livequery(function() {
    var $this = $(this), 
        opts = $.extend({}, defaults, $this.metadata(), $this.data());

    $this.addClass("inited").select2(opts);

    if (opts.sortable) {
      $this.select2("container").find("ul.select2-choices").sortable({
        containment: 'parent',
        items: "> .select2-search-choice",
        start: function() { $input.select2('onSortStart'); },
        update: function() { $input.select2('onSortEnd'); }
      });
    }
  });
});
