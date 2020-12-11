export function swipedetect(el, callback) {
  var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 60, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir) {};

  touchsurface.addEventListener(
    'touchstart',
    function(e) {
      var touchobj = e.changedTouches[0];

      swipedir = 'none';
      let dist = 0;
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      startTime = new Date().getTime();
      //e.preventDefault();
    },
    false
  );

  touchsurface.addEventListener(
    'touchmove',
    function(e) {
      //e.preventDefault(); // prevent scrolling when inside DIV
    },
    false
  );

  touchsurface.addEventListener(
    'touchend',
    function(e) {
      var touchobj = e.changedTouches[0];
      distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
      distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
      elapsedTime = new Date().getTime() - startTime;

      if (elapsedTime <= allowedTime) {
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          swipedir = distX < 0 ? 'left' : 'right';
        } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
          swipedir = distY < 0 ? 'up' : 'down';
        }
      }
      handleswipe(swipedir);
      // e.preventDefault();
    },
    false
  );
}
