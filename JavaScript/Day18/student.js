let marks = [45, 78, 90, 32, 67, 88];
let totalMarks = 0;
let count1 = 0;
let count2 = 0;
for(let mark of marks){
    totalMarks = totalMarks + mark;
    if(mark >= 60){
        count1++;
    }
    if(mark < 40){
        count2++;
    }
    console.log(mark);
}

console.log("Total Marks : ",totalMarks);
console.log("No. of Students score greater than or equal to 60 marks :",count1);
console.log("No. of students who failed the exam : ", count2);