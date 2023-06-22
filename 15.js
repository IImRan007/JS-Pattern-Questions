/*

Print:

ABCDE
ABCD
ABC
AB
A

*/

let str = "";

function print(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i + 1; j++) {
      str += String.fromCharCode(j + 65) + " ";
    }

    str += "\n";
  }
}

print(5);
console.log(str);
