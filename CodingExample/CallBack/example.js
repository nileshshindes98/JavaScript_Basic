const printfirstName=(name)=>{   
 var firstName = 'Nilesh';
 console.log("first Name",firstName)
 name();
}
const printLastName=()=>{
    var lastName = "Shinde";
    console.log("last name",lastName);
}
printfirstName(printLastName);

// his ensures that the function you pass as a callback is correctly assigned to the parameter 
//and can be invoked within the function
