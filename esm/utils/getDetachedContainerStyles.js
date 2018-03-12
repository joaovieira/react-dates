import { OPEN_UP, ANCHOR_RIGHT } from '../constants';

export default function getDetachedContainerStyles(openDirection, anchorDirection, referenceEl) {
  var referenceRect = referenceEl.getBoundingClientRect();
  var offsetX = referenceRect.left;
  var offsetY = referenceRect.top;

  if (openDirection === OPEN_UP) {
    offsetY = -(window.innerHeight - referenceRect.bottom);
  }

  if (anchorDirection === ANCHOR_RIGHT) {
    offsetX = -(window.innerWidth - referenceRect.right);
  }

  return {
    transform: 'translateX(' + String(offsetX) + 'px) translateY(' + String(offsetY) + 'px)'
  };
}