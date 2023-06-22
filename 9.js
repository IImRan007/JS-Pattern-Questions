/*

Print:

    *   
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *   

*/

let str = "";
let str2;

function print(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      str += "*";
    }
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }
    for (let j = 0; j < i; j++) {
      str2 += " ";
    }
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      str2 += "*";
    }
    for (let j = 0; j < i; j++) {
      str2 += " ";
    }
    str += "\n";
    str2 += "\n";
  }
}

print(5);
console.log(str + str2);
