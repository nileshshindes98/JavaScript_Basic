const numbers = [5, 10, 15, 20, 25];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
const average = sum / numbers.length;
console.log("average of array is ",average);
// console.log(`The average of the numbers is: ${average}`);