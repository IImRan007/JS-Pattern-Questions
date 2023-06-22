/*

Print:

1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

*/

let str = "";

function print(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j < n - i + 1; j++) {
      str += j + " ";
    }
    str += "\n";
  }
}

print(5);
console.log(str);
