// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

// Helpers
export function getScale(diffX, diffY) {
  const distance = Math.sqrt(
    Math.pow(diffX, 2) + Math.pow(diffY, 2)
  );
  return Math.min(distance / 800, 0.15);
}

export function getAngle(diffX, diffY) {
  return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

// Gets the mouse position
const getMousePos = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.clientX || e.clientY) {
    posx = e.clientX;
    posy = e.clientY;
  }
  return { x: posx, y: posy };
};
// Get sibilings
const getSiblings = (e) => {
  // for collecting siblings
  let siblings = [];
  // if no parent, return no sibling
  if (!e.parentNode) {
    return siblings;
  }
  // first child of the parent node
  let sibling = e.parentNode.firstChild;
  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

export { lerp, getMousePos, getSiblings };
