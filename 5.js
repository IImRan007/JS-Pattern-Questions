/*

Print:

* * * * *
* * * *
* * *
* *
*

*/

let str = "";

function print(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i + 1; j++) {
      str += "* ";
    }
    str += "\n";
  }
}

print(5);
console.log(str);
