var name = new Promise(function(resolve,reject){
    const flag = true;
    if (flag==true){
        resolve('completed');
    }
    else{
        reject("rejected")
    }
})

async function f1(){
    try {
        console.log(await promise);
    } catch (error) {
        console.error(error);
    }
}
f1();