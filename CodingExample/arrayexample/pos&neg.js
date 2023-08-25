const numbers = [2, 4, -1, 3, -5, -8, 9, -6];

let sumPositive = 0;
let sumNegative = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        sumPositive += numbers[i];
    } else if (numbers[i] < 0) {
        sumNegative += numbers[i];
    }
}

console.log("Sum of positive numbers : ", sumPositive);
console.log("Sum of negative numbers : ", sumNegative);
