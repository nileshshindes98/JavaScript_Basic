// console.log('start')

// setInterval(() => {
//     console.log('callback')
// },1000);

// console.log('end')

// setTimeout / setInterval

// f1=()=>{
//     console.log('function f1');
// }

// f2=()=>{
//     setTimeout(() => {
//     console.log('function f2');
//     }, 3000);
    
// }

// f3=()=>{
//     return new Promise((resolve, reject) => {
//         console.log('function f3');
//     }) 
// }

// f1();
// f2();
// f3();

// ------------------------------------------------------------------------------------------------------------

function f1(){
    console.log("This is f1 function");
}

function f2(){
    console.log("This is f2 function");
}

function f3(){
    console.log("and this final function");
    setTimeout(() => {
        f2();
    }, 2000);
    
    f1();

Promise.resolve().then(function f4(){
    setTimeout(()=>{
        console.log("timeout inside the promise");
    })
    console.log("Promise");
});
}

f3();