// for each variable (variable declarations) a property is created in the variable Object.which is set to 
// undefined

// console.log(a);
// var a= 10;
// output = undefined

// var a=10;
// console.log(a);
// output= 10

// console.log(b);
// let b=20;
// output= ReferenceError: Cannot access 'b' before initialization

// console.log(b);
// const b=20;
// output= ReferenceError: Cannot access 'b' before initialization

// that means hoisting work with only var 

// console.log("i am a "+job);
// var job = "web developer";
// console.log("i am a "+job);

// function whoAmI(){
//     console.log("i am a "+job);
//     var job ="full stack"
//     console.log("i am a "+job);
   
// }
// whoAmI();

// output =
// i am a undefined
// i am a web developer
// i am a undefined
// i am a full stack