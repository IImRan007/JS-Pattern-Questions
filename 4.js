/*

Print:

1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

*/

let str = "";

function print(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += i;
    }
    str += "\n";
  }
}

print(5);
console.log(str);
