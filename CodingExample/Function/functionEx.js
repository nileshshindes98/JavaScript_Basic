// General function declaration
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));



// Arrow function syntax
const subtract = (a, b) => a - b;

// Calling the arrow function
console.log(subtract(5, 2));  // Output: 3



// Anonymous function assigned to a variable
const multiply = function(x, y) {
  return x * y;
};

// Calling the anonymous function
console.log(multiply(4, 3));  // Output: 12














// 'var' declarations are function-scoped
function exampleVar() {
    var x = 10;
    //let x =10;
    x=10;
    if (true) {
      // letx=30
      var x = 20;
      console.log(x); 
    }
    console.log(x);
  }
  exampleVar();
  