/*

Print:

* * * *
* * * *
* * * *
* * * *

*/
let str = "";

function print(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      str += "*";
    }
    str += "\n";
  }
}

print(5);
console.log(str);
