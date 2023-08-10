function add(a, b) {
    return a + b;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function main() {
    console.log("----------------");

  // Asynchronous operation using setTimeout
  setTimeout(function() {
    const result2 = multiply(4, 5);
  console.log("Result of multiplication:", result2);
  }, 2000); // 2000 milliseconds = 2 seconds

    const result1 = add(2, 3);
    console.log("Result of addition:", result1);
  
    const result2 = multiply(4, 4);
    console.log("Result of multiplication:", result2);
  
    console.log("--------------------");
  }
  
  main();
  