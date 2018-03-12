function getScrollParent(node, rootNode) {
  var parent = node.parentElement;

  if (parent == null) return null;

  var _window$getComputedSt = window.getComputedStyle(parent),
      overflowY = _window$getComputedSt.overflowY;

  var isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';

  if (isScrollable && parent.scrollHeight > parent.clientHeight) {
    return parent;
  }

  return getScrollParent(parent) || rootNode;
}

function getScrollAncestorsOverflow(node) {
  var acc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();

  var rootNode = document.scrollingElement || document.documentElement;
  var scrollParent = getScrollParent(node, rootNode);
  acc.set(scrollParent, scrollParent.style.overflowY);

  if (scrollParent === rootNode) return acc;
  return getScrollAncestorsOverflow(scrollParent, acc);
}

// Get and store all ancestor elements that scroll along with its overflowY
// CSS property, so they can be reset when enabling scroll again.
export default function disableScroll(node) {
  var scrollAncestorsOverflow = getScrollAncestorsOverflow(node);
  var toggle = function toggle(on) {
    return scrollAncestorsOverflow.forEach(function (overflowY, ancestor) {
      ancestor.style.setProperty('overflow-y', on ? 'hidden' : overflowY);
    });
  };

  toggle(true);
  return function () {
    return toggle(false);
  };
}