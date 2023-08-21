// function f1 (){
//     var y =20;

//     function f2(){
//         var x=10;
//         var z=4
//         var output = x+y+z;
//         console.log(output);
//     }
//     return f2();
// }
// f1();

// -----------------------------------------------------------------------------------------------

// function globalScope(){
//      var message ="this is lexical scope message";

// function innerFunction(){
//     console.log(message);
// }
// return innerFunction();
// }
// globalScope();

// ----------------------------------------------------------------------------------------------------

function outerfunction(){

    let outervar = 'this let variable';

function innerFunction(){
    console.log(outervar);
}
innerFunction();
function addOne(){
    const myfunction = outerfunction();
    myfunction();
}
addOne();
}
outerfunction();  //continue print outerVar

// --------------------------------------------------------------------------------------------------

// const myGlobal = 0;

// function func() {
//   const myVar = 1;
//   console.log(myGlobal); // 0

//   function innerOfFunc() {
//     const myInnerVar = 2;
//     console.log(myVar, myGlobal); // 1 0

//     function innerOfInnerOfFunc() {
//       console.log(myInnerVar, myVar, myGlobal); // 2 1 0
//     }

//     innerOfInnerOfFunc();
//   }

//   innerOfFunc();
// }

// func();