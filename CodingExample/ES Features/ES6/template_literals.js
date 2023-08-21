const myName = "Nilesh";
const age ="25";

const message =`hello ,my name is ${myName} and i am ${age} years old`;
console.log(message);

// ${...} syntax inside the template literal allows you to embed variables (myName and age) directly 
// within the string. The resulting string is much easier to read and write compared to traditional 
// string concatenation

const product = "coffee";
const price = 3.99;
const quantity=2;

const totalPrice = price*quantity

console.log(`
product = ${product}
price = ${price}
quantity = ${quantity}
total price = ${totalPrice}
`)