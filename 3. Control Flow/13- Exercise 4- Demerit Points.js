// Exercise 04 - Demerit Points

// Speed Limit = 70km
// 5km -> 1 point
// Math.floor(1.3) // 1
// 12 points -> suspended

checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("Points", points);
}
