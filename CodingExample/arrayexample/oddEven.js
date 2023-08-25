
// console.log("The number is even");
// for(i = 0; i <= 20; i++){
//     if (i % 2 == 0) {
//         console.log(i);
// }
// }
const num1 = 7;
const num2 = 16;
function checkOddEven(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  console.log(`${num1} is ${checkOddEven(num1)}`);
  console.log(`${num2} is ${checkOddEven(num2)}`);
  