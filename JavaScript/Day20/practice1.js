let numbers = [10, 25, 30, 15, 40, 5];
let sum = 0;
let count = 0;
//printing all the no.
for(let number of numbers){
    console.log(number);
    //finding sum of all numbers
    sum = sum + number;
    //finding numbers greater than 20
    if(number > 20){
        count++;
    }
    
}
console.log(sum);
console.log(count);