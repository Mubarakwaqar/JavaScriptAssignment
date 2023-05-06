//Q4. // take input from user for the number and length of the table
var num = parseInt(prompt("Enter a number to print its multiplication table:"));
var length = parseInt(prompt("Enter the length of the table:"));
// print the multiplication table
console.log(`Multiplication table of ${num} with length ${length}:`);
for (let i = 1; i <= length; i++) {
 console.log(`${num} x ${i} = ${num * i}`);
}


//Q5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
 console.log(fruits[i]);
}


//Q6
document.write("a. Counting: ");
for (var i = 1; i <= 15; i++) {
 document.write(i + ", ");
} document.write("<br>b. Reverse counting: ");
for (var i = 10; i >= 1; i--) {
 document.write(i + ", ");
}
 document.write("<br>c. Even: ");
for (var i = 0; i <= 20; i += 2) {
 document.write(i + ", ");
}
 document.write("<br>d. Odd: ");
for (var i = 1; i <= 20; i += 2) {
 document.write(i + ", ");
}
 document.write("<br>e. Series: ");
for (var i = 2; i <= 20; i += 2) {
 document.write(i + "k, ");
}

//Q9

let A = [24, 53, 78, 91, 12];
let smallest = A[0];
for (let i = 1; i < A.length; i++) {
 if (A[i] < smallest) {
 smallest = A[i];
 }
}
console.log("The smallest number in the array is: " + smallest);


//Q10
for (let i = 1; i <= 20; i++) {
    console.log(i * 5);
   }