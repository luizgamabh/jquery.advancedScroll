/*! Author: Luiz Gustavo Freire Gama - @luizgamabh */

'use strict';

(function($) {
    $.fn.advancedScroll = function() {
        var touchable = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
        var lastMeasurePosition = 0;
        var scrollTop;
        return this.each(function() {
            var _this = this,
                $this = $(_this);
            if (_this.self != window.self) return; // Allows only window to use this plugin
            lastMeasurePosition = touchable ? 0 : $this.scrollTop();
            var bestEventForThisDevice = (touchable ? "touchmove" : "scroll");
            $this.on(bestEventForThisDevice, function(event) {
                var scrollTop = $this.scrollTop(),
                    actualMeasurePosition = event.originalEvent.touches ? $this.scrollTop() - event.originalEvent.touches[0].pageY : scrollTop,
                    max = $(document).height() - $(window).height();
                scrollTop = scrollTop <= max ? scrollTop : max;
                if (actualMeasurePosition > lastMeasurePosition) {
                    $this.trigger("scrolldown", [actualMeasurePosition]);
                } else {
                    $this.trigger("scrollup", [actualMeasurePosition]);
                }
                lastMeasurePosition = actualMeasurePosition;
            });
        });
    };
})(jQuery);

// Uncomment the following line to enable it wherever, or call this on each page you want to use:
// $(window).advancedScroll();