/*

Print:

*
**
***
****
*****
****
***
**
*

*/

let str = "";

function print(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i;
    if (i > n) {
      stars = 2 * n - i;
    }
    for (let j = 1; j <= stars; j++) {
      str += "*";
    }

    str += "\n";
  }
}

print(5);
console.log(str);
