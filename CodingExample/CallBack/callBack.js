// function simple (a){
//     a();
// }
// function callback(){
//     console.log("passed the argument of callback function");
// }

// simple(callback);

// // here we just simple function that is passed as an argument to another function 

// ------------------------------------------------------------------------------------------------------

// function operation(value,parameterForCB){
//     const result=value*2;
//     parameterForCB(result);
// }
// function displayResult(result){
//     console.log("Result",result);
// }

// operation(5,displayResult);

// -------------------------------------------------------------------------------------------------------

//why we use const instead of function beacause prevent reassignment of the function variable

// const operation=(value,parameterCB)=>{
//     const result= value*2;
//     parameterCB(result);
// }
// const displayResult=(result)=>{
//     console.log("Result",result);
// }
// operation(4,displayResult);

// -------------------------------------------------------------------------------------------------------
// calculate sum and product of two number
// const calaculate=(num1,num2,callback)=>{
//     const sum = num1+num2;
//     const product= num1*num2;
//     callback(sum,product);
// }
// const displayResult=(sum,product)=>{
//         console.log("sum ",sum);
//         console.log("product",product);
// }
// calaculate(4,4,displayResult);

// -------------------------------------------------------------------------------------------------------

