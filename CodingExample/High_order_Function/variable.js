// var a =10;
let a =20;
const b= 50;
function add() {
 let a =10;
    b = 30; // not allowed to reasign value(const)
    var x= a+b;
 console.log(x);

 function sub(){
    a =30; //  
    let c=40;
// var  = c-a;
var y = c-b;
console.log(y)
 }
 sub();
}
add();