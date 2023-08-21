// const add= (a,b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const result = a+b;
//             resolve(result);
//         },3000);
        
//     })
// }
// add (5,3)
// .then((result)=>{
//     console.log("Addition result",result);
// })
// .catch((error)=>{
//     console.error("Error",error);
// })

/*------------------------------------------------------------------------*/

// const add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const result = a + b;
//             resolve(result);
//         }, 3000);
//     });
// }

// const performAddition = async () => {
//     try {
//         const result = await add(5, 3);
//         console.log("Addition result", result);
//     } catch (error) {
//         console.error("Error", error);
//     }
// };

// performAddition();
   
//--------------------------------------------------------------------------------------------------------

// const fileData=()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const Data = {message : "this is promise example"}
//             resolve(Data);
//         }, 3000);
//     })
// }

// fileData()
//         .then((result)=>{
//             console.log(result.message);
//         })
//         .catch((error)=>{
//             console.error(error);
//         })

// ---------------------------------------------------------------------------------------------------------

// function printfirstName(){
//     return new Promise((resolve, reject) => {
//         var firstName = 'nilesh';
//         console.log("first name",firstName);
//         resolve();
//     })
// }

// function printlastName(){
//     return new Promise((resolve, reject) => {
//         var lastName = 'shinde';
//         console.log("last name",lastName);
//         resolve();
//     })
// }
// printfirstName()
// .then(printlastName)
// .then(()=>{
//     console.log("successfully completed");
// })
// .catch((Error)=>{
//     console.error("Error",Error);
// })

