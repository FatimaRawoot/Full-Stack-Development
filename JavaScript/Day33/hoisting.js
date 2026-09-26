//var hoisting
console.log(a);
var a = 10;
console.log(a);
//Temporal Dead Zone
console.log(x);
let x = 20;
//function hoisting
greet();//Hello Fatima

function greet(){
    console.log("Hello Fatima");
}

sayHello();//ReferenceError

const sayHello = () => {
    console.log("Hello");
};