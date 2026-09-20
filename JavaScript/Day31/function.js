function welcome(){
    console.log("Welcome to Full Stack Development!");
}
function studentInfo(){
    console.log("I am learning JavaScript.");
}
function greetUser(name){
    console.log("Hello " + name);
}
//Return the value
function square(num){
    return num * num;
}
function calculateAge(name, age){
    return (name + " is " + age + " years old" );
}
function add(a, b){
    return a+b;
}
//Arrow function
const mul = (a, b) => {
    return a*b;
}
const isEven = (a) => {
    if(a%2 == 0){
        return "no. is even";
    }
    else{
        return "no. is odd";
    }
}
const fullName = (firstName, lastName) => {
    return firstName + " " + lastName;
}
//Call back function
function substraction(a,b){
    console.log(a-b);
}
function addition(a, b){
    console.log(a+b);
}
function multiply(a, b){
    console.log(a*b);
}
function calculate(a,b,callback){
    callback(a, b);
}
welcome();
studentInfo();
greetUser("Fatima");
let result = square(6);
console.log(result);
let message = calculateAge("Fatima", 21);
console.log(message);
let sum = add(2,7);
console.log(sum);
console.log(mul(5,4));
console.log(isEven(5));
console.log(fullName("Fatima", "Rawoot"));

calculate(10, 5, addition);
calculate(10, 5, substraction);
calculate(10, 5, multiply);