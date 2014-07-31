jquery.advancedScroll
=====================

Creates 2 new events for *window* to be listen: **scrollup** and **scrolldown**

## Instalation

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="jquery.advancedScroll.js"></script>
<script>
$(window).advancedScroll();
</script>
```

## Use:

```javascript
$(window).on({
scrollup: function() { /* do something */ },
scrolldown: function() { /* do something */ }
});
```

Please check [jquery.advancedBreak](https://github.com/luizgamabh/jquery.advancedBreak)
