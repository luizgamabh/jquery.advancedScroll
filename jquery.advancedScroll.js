/*! Author: Luiz Gustavo Freire Gama - @luizgamabh */

'use strict';

(function($) {
    $.fn.advancedScroll = function() {
        var lastScrollTop = 0;
        return this.each(function() {
            var _this = this,
                $this = $(_this);
            if (_this.self != window.self) return; // Allows only window to use this plugin
            lastScrollTop = $this.scrollTop();
            $this.on("scroll touchmove", function(event) {
                var actualScrollTop = $this.scrollTop();
                if (actualScrollTop > lastScrollTop) {
                    $this.trigger("scrolldown", [actualScrollTop]);
                } else {
                    $this.trigger("scrollup", [actualScrollTop]);
                }
                lastScrollTop = actualScrollTop;
            });
        });
    };
})(jQuery);

// Uncomment the following line to enable it wherever, or call this on each page you want to use:
// $(window).advancedScroll();