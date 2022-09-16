//Linear interpolation
// https://betterprogramming.pub/drag-and-drop-with-linear-interpolation-in-javascript-9e5dc779bc23
function lerp(start, end, amt) {
  return start + (end - start) * amt;
}
