// Break and Continue

let i = 0;
while (i <= 10) {
  if (i === 5) break;

  console.log(i); // 1, 2, 3, 4
  i++;
}

// continue
let j = 0;
while (j <= 10) {
  if (j % 2 === 0) {
    j++;
    continue;
  }

  console.log(i); // odd number: 1, 3, 5, 7, 9
  j++;
}
