var x = 1 ;
var y = 2;
z = x+y;
console.log(z);

var name = "Tarun Narahari";

function sayHello() { // anonymous function
    console.log("Hello");
}
sayHello();

var talk = function sayHello(){ //named function
    console.log("Hello");
}
talk();

var talk2 =  () => { //arrow function
    console.log("Hello");
}

talk2();

var talk3 =  () =>  console.log("Hello");  //arrow function in one line
talk3();