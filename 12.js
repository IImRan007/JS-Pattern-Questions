/*

Print:

1      1
12    21
123  321
12344321

*/

let str = "";

function print(n) {
  let space = 2 * (n - 1);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    for (let j = 1; j <= space; j++) {
      str += " ";
    }
    for (let j = i; j >= 1; j--) {
      str += j;
    }

    str += "\n";
    space -= 2;
  }
}

print(5);
console.log(str);
