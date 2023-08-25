const checkPromise = () => { return new Promise((resolve, reject) => {
// const checkPromise = new Promise((resolve, reject) => {  ....we declare variable and set to be promise
    const number = 10;
    if (number>10) {
        resolve("promise was resolved");
    } else {
        reject("Promise was rejected");
    }
});
};
checkPromise().then(result=>{            //we declare "checkPromise" as function
    // checkPromise.then(result=>{      //for variable we write that format
    console.log(result);
}).catch(error=>{
    console.error(error);
});

// ------------------------------------------------------------

//here we use asynch function(setTimeout) and try to solve promise asynchronous means -something will happen in future 
// not right now

const checkPromise1 =()=>{return new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = 12;
        if (number>10) {
            resolve("promise was resolved");
        } else {
            reject("Promise was rejected");
        }
    }, 2000);
});
};
checkPromise1().then(result=>{
    console.log(result);
}).catch(error=>{
    console.error(error);
});

// -----------------------------------------------------------------

// here we use async and await in function

const checkPromise2 =()=>{return new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = 12;
        if (number>10) {
            resolve("promise was resolved");
        } else {
            reject("Promise was rejected");
        }
    }, 2000);
});
};
//here we declare new function "getCheckPromise2" and async is keyword
const getCheckPromise2 = async () => {
    try {
        const result = await checkPromise2();
        console.log(result); 
    } catch (error) {
        console.error(error); 
    }
};
//here we convert this code into traditional format that means  remove the arrow function
// async function getCheckPromise2() {
//     try {
//         const result = await checkPromise2();
//         console.log(result); 
//     } catch (error) {
//         console.error(error); 
//     }
// }

getCheckPromise2();

// -----------------------------------------------------------------
//using async/await with multiple promises

const fetchData1 =()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from source 1");
        }, 1000);
    });
};

const fetchData2 =()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from source 2");
        }, 1500);
    });
};

const fetchMultipleData = async ()=>{
    try {
        const result1= await fetchData1();
        console.log(result1);
        const result2= await fetchData2();
        console.log(result2);
    } catch (error) {
        console.error(error);
    };
};

fetchMultipleData();