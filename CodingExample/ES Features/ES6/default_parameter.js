function example(myName="Nilesh"){
    console.log(`hello, ${myName}`);
}

example();
example("yogesh");

// in default parameter When you call the function without providing an argument, as in example(), 
// it will use the default value and print "Hello, Nilesh"
// If you provide an argument when calling the function, like in example("Yogesh"), the provided value will 
// override the default value, and the function will print "Hello, Yogesh" instead.