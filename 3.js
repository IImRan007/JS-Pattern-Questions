/*

Print:

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/

let str = "";

function print(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    str += "\n";
  }
}

print(5);
console.log(str);
