// function first(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('First Example Completed');
//             resolve();
//         },1000);  
//     })
// }

// function second(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('Second Example Completed');
//             resolve();
//         },2000);  
//     })
// }

// function third(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('Third Example Completed');
//             resolve();
//         },1500);  
//     })
// }

// async function performExample(){
//     try {
//         await first();
//         await second ();
//         await third();
//         console.log('-------------------------------')
        
//     } catch (error){
//         console.log('error:',error.message);
//     }
// }
// performExample();

/*------------------------------------------------------------------------*/

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = a + b;
            resolve(result);
        }, 3000);
    });
};

const subtract = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = a - b;
            resolve(result);
        }, 2000);
    });
};

const performOperations = async () => {
    try {
        const subtractResult = await subtract(10, 5);
        console.log("Subtraction result", subtractResult);

        const additionResult = await add(subtractResult, 3);
        console.log("Addition result", additionResult);
    } catch (error) {
        console.error("Error", error);
    }
};

performOperations();
