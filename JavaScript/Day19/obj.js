let student = {
    name : "Fatima", 
    age : 21, 
    course : "B.Tech I.T", 
    college : "DBATU"
};
console.log(student.name);
console.log(student.course);
//update property
student.age = 20;
//add new property
student.city = "Mumbai";
//printing whole object 
for(let key in student){
    console.log(key + ":" + student[key]);
}