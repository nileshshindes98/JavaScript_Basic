// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(console.log('the first promised has resolved'))
        
//     }, 1000);
// })

// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//        resolve(console.log('the second promised has resolved'))
//     //    reject(console.log('the second promised has rejected')) 
//     },2000);
// })

// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(console.log('the third promised has resolved'))
       
//     }, 3000);
// })
// const prac=[p1,p2,p3];
// Promise.all(prac.map(p=>p)).then(()=>{
//     console.log('completed');
// }).catch((error)=>{
//     console.error(error);
// })

// Promise.all([p1,p3,p2]).then((val)=>{
// console.log('All promised successfully completed');
// }).catch((error)=>{
//     console.log(("One or more promise are rejected",error));
// })

// // ---------------------------------------------------------------------------------------------
// var a=30
// var b = 40;


// function add(a,b) {
//  return new Promise(function(res,rej){
//     var sum = a+b;
//     res(sum);
//      })
//     }

// function sub(a,b) {
//     return new Promise(function(res,rej){
//        var difference = a-b;
//        if (difference>=0) {
//            res(difference);
//        }else{
//            rej("subtraction result is less than 0");
//        } 
//     })
// }

//    function multi(a,b) {
//     return new Promise(function(res,rej){
//        var multiple = a*b;
//        res(multiple);
//     })
//    }
// Promise.all([add(a,b),sub(a,b),multi(a,b)]).then((result)=>{
//   console.log("all promises completed"); 
// }).catch(function(error){
//     console.error("failed",error);
// });

// -------------------------------------------------------------------------------------------------

// function task1() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('task 1 completed');
//             resolve();
//         }, 1000);
//     })
// }

// function task2() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('task 2 completed');
//             resolve();
//         }, 1500);
//     })
// }

// function task3() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('task 3 completed');
//             resolve();
//         }, 2000);
//     })
// }

// const tasks =[task1,task2,task3];
// Promise.all(tasks.map(task=>task())).then(()=>{
//     console.log("All tasks completed");
// }).catch(error=>{
//     console.error('an error occurred',error);
// });
// -------------------------------------------------------------------------------------------------
// const promise1= Promise.resolve(2);
// const promise2 = new Promise ((resolve,reject)=>setTimeout(reject,100,"rejected"));

// Promise.allSettled([promise1.promise2]).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log("failed",error);
// });
// -----------------------------------------------------------------------------------------------------

// function task1() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             // console.log('task 1 completed');
//             resolve();
//         }, );
//     })
// }

// function task2() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             // console.log('task 2 completed');
//             reject();
//         }, );
//     })
// }

// function task3() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             // console.log('task 3 completed');
//             reject();
//         },);
//     })
// }

// Promise.any([task1(),task2(),task3()]).then(()=>{
//     console.log('at least one promise completed');
// }).catch(()=>{
//     console.error("failed",);
// })

// -------------------------------------------------------------------------------------------
// let p1 = new Promise((resolve,reject)=>{
//     // console.log("p1");
//     resolve(1);
// });

// let p2 = new Promise((resolve,reject)=>{
//     // setTimeout(resolve,1500);
//     setTimeout(() => {
//         // console.log("p2");
//         reject(2);
//     }, 1500);
// });

// let p3 = new Promise((resolve,reject)=>{
//     // console.log("p3");
//     resolve(3);
// });

// let p4 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         // console.log("p4");
//         resolve(4); 
//     }, 3000);
// });
// Promise.race([p1,p2,p3,p4]).then((result)=>{
//     console.log('First of four responses',result);
// }).catch((err)=>{
//     console.error("catch error",err);
// })

// -----------------------------------------------------------------------------------------------

// function fn(arg){
//     console.log(this.number,arg);
// }

// let bindFn = fn.bind({number : 99},"argument");
// bindFn();

//here we bind this value for the fn function and invoke the returned function from the bind method

// ------------------------------------------------------------------------------------------------

let name ={
    firstname : "Nilesh",
    lastname : "Shinde",
 }
 printFullname = function(state){
    console.log(this.firstname+ " "+this.lastname +" from "+state);
}
// printFullname.call(name);
let name2={
    firstname : "Tushar",
    lastname : "Mohite",
}
// printFullname.call(name2);

printFullname.call(name2,"maharashtra");
// printFullname.apply(name2,"Maharashtra"); //TypeError: CreateListFromArrayLike called on non-object
printFullname.apply(name2,["Delhi"]);
let printMyName = printFullname.bind(name2,"goa")
console.log(printMyName);
printMyName();