//destructure assignment------------

const numbers =[1,2,3];
const [first,second,third]=numbers;
console.log(first);   // Output: 1
console.log(second);  // Output: 2
console.log(third);   // Output: 3
//allows you to extract values from arrays or objects and assign them to variables

// ----------------------------------------------------------------------------------

//spread operator-------------

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const mergeToarr = [...arr1,...arr2];
console.log(mergeToarr);      //output : [ 1, 2, 3, 4, 5, 6 ]
console.log(...mergeToarr);   //output :  1, 2, 3, 4, 5, 6 
//add two array in one single array

// mergin object

const obj1={x:1,y:2};
const obj2 ={y:3,z:4};

const mergeObj = {...obj1,...obj2};
console.log(mergeObj); //output={ x: 1, y: 3, z: 4 }
// ----------------------------------------------------------------------------------

//template literals (template string)-----------------

const myName = "Nilesh";
const age = "25";
const message =`hello,my name is ${myName} and i am ${age} years old`;
console.log(message);

//allows you to write variablesm (myName and age) directly no need to + "" like that

// ----------------------------------------------------------------------------------

//includes---------------------------

const line = "hello ,this is javascript practice with es features"
console.log(line.includes('is')); // output = true

//in INCLUDES method is given value in 'true' if the element is found and false if it's not

// ----------------------------------------------------------------------------------

//index operator---------------------

const message1 = "hello, world";
console.log(message1[7]);  // output = w

// ----------------------------------------------------------------------------------

//object key value---------------
const person ={
    firstName : "nilesh",
    lastName : "shinde",
    age : 25
};
const getArray = Object.values(person);
console.log(getArray);  //output = [ 'nilesh', 'shinde', 25 ]

//work with just things