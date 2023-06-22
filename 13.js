/*

Print:

 1
 2 3
 4  5  6
 7  8  9  10
11 12 13 14 15

*/

let str = "";

function print(n) {
  let startNum = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += startNum + " ";
      startNum = startNum + 1;
    }

    str += "\n";
  }
}

print(5);
console.log(str);
