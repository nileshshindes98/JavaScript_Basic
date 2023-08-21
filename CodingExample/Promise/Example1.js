function add (a, b){
    return new Promise(function(res,rej){
        var sum= a+b;
        return(sum);

    })
}
function sub (a,b){
    return new Promise(function(res,rej){
        var difference= a-b;
        return(difference);
})
}
Promise.all([add(),sub()].then(result)=>)