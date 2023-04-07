// 1st question

// let num1 = prompt("Enter your first Number ");
// let num2 = prompt("Enter your  second number")
 
// num1 = parseInt(num1);
// num2 = parseInt(num2);

// if (num1 > num2 ){
//     console.log(num1);
// } else {
//     console.log(num2);
// }

// 2nd question

// let num = prompt("Enter Your Number");
// let sign;

// if(num >0) {
//     sign = "+";
// }
//  else if(num < 0) {
//     sign = "-";
// } else{
//     sign = "";
// }
// alert("This sign is" +sign);

// 3rd question

// let num1 = prompt("Enter your First number");
// let num2 = prompt("Enter your Second number");
// let num3 = prompt("Enter your Third number");
// let num4 = prompt("Enter your Fourth number");
// let num5 = prompt("Enter your Fifth number");

// num1 = parseInt(num1);
// num2 = parseInt(num2);
// num3 = parseInt(num3);
// num4 = parseInt(num4);
// num5 = parseInt(num5);

//  let largest = num1;
// if (num2 > largest){
//     largest = num2;
// }if (num3 > largest){
//     largest = num3;
// }if (num4 > largest){
//     largest = num4;
// }if (num5 > largest){
//     largest = num5;
// }
// console.log("The largest number is"+ largest);

// 4th  question

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//       console.log(i + " is even");
//     } else {
//       console.log(i + " is odd");
//     }
//   }
  
// 5th Question 

let percentage = prompt("Enter your marks");
let marks = [80, 75, 92, 61, 78];
let total = 0;

for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}

let average = total / marks.length;
let grade;

if (percentage < 60) {
  grade = "F";
} else if (percentage < 70) {
  grade = "D";
} else if (percentage < 80) {
  grade = "C";
} else if (percentage < 90) {
  grade = "B";
} else {
  grade = "A";
}

console.log("The average marks are " + percentage);
console.log("The grade is " + grade); 

// 6th question

// let output = [];


//  for (let count = 1; count <= 100; count++) {
//   if (count % 3 === 0 && count % 5 === 0){
//    output.push("FizzBuzz");
//   } else if (count % 3 === 0){
//    output.push("Fizz");
//   } else if  (count % 5 === 0) {
//     output.push("Buzz");
//   } else {
//     output.push(count);
//   }
  
//  }
//  console.log(output); 

// 7th question 
// let pattern = "";

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     pattern += "* ";
//   }
//   pattern += "\n";
// }

// console.log(pattern); 


