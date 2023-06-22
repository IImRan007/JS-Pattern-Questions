/*

Print:

1
01
101
0101
10101

*/

let str = "";

function print(n) {
  let start = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      start = 1;
    } else {
      start = 0;
    }

    for (let j = 0; j <= i; j++) {
      str += start;
      start = 1 - start;
    }

    str += "\n";
  }
}

print(5);
console.log(str);
