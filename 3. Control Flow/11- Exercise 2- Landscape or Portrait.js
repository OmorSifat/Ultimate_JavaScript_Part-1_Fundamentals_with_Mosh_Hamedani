// Exercise 02 - Landscape or Portrait

console.log(isLandscape(300, 600));

function isLandscape(width, hight) {
  if (width > hight) return true;
  return false; // false
}

// or
function isLandscape(width, height) {
  // return (width > hight) ? true : false;
  return width > height; // false
}
