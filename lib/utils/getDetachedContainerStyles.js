Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getDetachedContainerStyles;

var _constants = require('../constants');

function getDetachedContainerStyles(openDirection, anchorDirection, referenceEl) {
  var referenceRect = referenceEl.getBoundingClientRect();
  var offsetX = referenceRect.left;
  var offsetY = referenceRect.top;

  if (openDirection === _constants.OPEN_UP) {
    offsetY = -(window.innerHeight - referenceRect.bottom);
  }

  if (anchorDirection === _constants.ANCHOR_RIGHT) {
    offsetX = -(window.innerWidth - referenceRect.right);
  }

  return {
    transform: 'translateX(' + String(offsetX) + 'px) translateY(' + String(offsetY) + 'px)'
  };
}