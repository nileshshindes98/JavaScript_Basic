// Global Scope
var globalVar = 5; // Declared in the global scope

function globalScopeExample() {

  // Function Scope
  var functionVar = 10; // Declared in the function scope
  console.log(globalVar); // Accessible here
  console.log(functionVar); // Accessible here
  
  if (true) {
    
    // Block Scope
    var blockVar = 15; // Still function-scoped due to var
    let blockLet = 20; // Block-scoped using let
    const blockConst = 25; // Block-scoped using const
    console.log(blockVar); // Accessible here
    console.log(blockLet); // Accessible here
    console.log(blockConst); // Accessible here
  }
  
  console.log(blockVar); // Accessible here due to var (may be undefined)
  // console.log(blockLet); // This will produce an error since blockLet is not accessible here
  // console.log(blockConst); // This will produce an error since blockConst is not accessible here
}

globalScopeExample();

console.log(globalVar); // Accessible here
// console.log(functionVar); // This will produce an error since functionVar is not accessible here
// console.log(blockVar); // This will produce an error since blockVar is not accessible here
// console.log(blockLet); // This will produce an error since blockLet is not accessible here
// console.log(blockConst); // This will produce an error since blockConst is not accessible here
