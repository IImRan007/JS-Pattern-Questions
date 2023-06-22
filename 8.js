/*

Print:

*********
 *******
  *****
   ***
    *   

*/

let str = "";

function print(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      str += " ";
    }
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      str += "*";
    }
    for (let j = 0; j < i; j++) {
      str += " ";
    }
    str += "\n";
  }
}

print(5);
console.log(str);
