/*

Print:

A
A B
A B C
A B C D
A B C D E

*/

let str = "";

function print(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(j + 65) + " ";
    }

    str += "\n";
  }
}

print(5);
console.log(str);
