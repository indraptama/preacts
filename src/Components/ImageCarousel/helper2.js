(function() {
  'use strict';

  function Wallops() {
    var wallopEl = document.querySelector('.Wallop');
    var wallop = new Wallop(wallopEl);
    var paginationDots = Array.prototype.slice.call(document.querySelectorAll('.Wallop-dot'));

    /*
    Attach click listener on the dots
    */
    paginationDots.forEach(function (dotEl, index) {
      dotEl.addEventListener('click', function(e) {
        e.preventDefault();
        wallop.goTo(index);
      });
    });

    /*
    Listen to wallop change and update classes
    */
    wallop.on('change', function(event) {
      removeClass(document.querySelector('.Wallop-dot--current'), 'Wallop-dot--current');
      addClass(paginationDots[event.detail.currentItemIndex], 'Wallop-dot--current');
    });

    // Helpers
    function addClass(element, className) {
      if (!element) { return; }
      element.className = element.className.replace(/\s+$/gi, '') + ' ' + className;
    }

    function removeClass(element, className) {
      if (!element) { return; }
      element.className = element.className.replace(className, '');
    }

  //Make it Global
  window.Wallops = Wallops;

}());
