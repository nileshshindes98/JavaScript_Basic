// function outer(func){
//     func();
// }
// function sayHello(){
//     console.log('hello world');
// }
// outer(sayHello);

// ------------------------------------------------------------------------

// function f1(name) {
//     console.log(`Hello, ${name}!`);
//   }
  
//   setTimeout(() => f1("Nilesh"), 1000); // Output after 1 second: "Hello, Nilesh!"

  // ------------------------------------------------------------------------

  const students = [
  { name: "Nilesh", score: 85 },
  { name: "Tushar", score: 92 },
  { name: "Yogesh", score: 78 },
];

const studentNames = students.map(student => {
    console.log(`Name : ${student.name}, Score :${student.score}`);
});
console.log(studentNames); // Output: [Name : Nilesh, Score :85
//                                        Name : Tushar, Score :92
//                                        Name : Yogesh, Score :78]
// -------------------------------------------------------------------------------------

// function delayedMsg() {
//     console.log("This message is delayed.");
//   }
  
//   setTimeout(delayedMsg, 2000); // Output after 2 seconds: "This message is delayed."

//   --------------------------------------------------------------------------------------
  
// const arr = [1, 2, 3, 4, 5];
// const result = arr.filter((num) => num % 2) 
// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(result); // [1, 3, 5]