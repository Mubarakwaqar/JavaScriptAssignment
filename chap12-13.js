//Q1

// var char = prompt("Enter a character:");
// // get ASCII code of the character
// var charCode = char.charCodeAt(0);
// // check if the character is a number
// if (charCode >= 48 && charCode <= 57) {
//  alert("The entered character is a number.");
// }
// // check if the character is an uppercase letter
// else if (charCode >= 65 && charCode <= 90) {
//  alert("The entered character is an uppercase letter.");
// }
// // check if the character is a lowercase letter
// else if (charCode >= 97 && charCode <= 122) {
//  alert("The entered character is a lowercase letter.");
// }
// // if the entered character is none of the above
// else {
//  alert("Invalid input.");
// }


//Q2
// var num1 = parseInt(prompt("Enter the first integer: "));
// var num2 = parseInt(prompt("Enter the second integer: "));
// // Check if the numbers are equal
// if (num1 === num2) {
//     console.log("The two integers are equal");
//    }
//    else {
//     // Display the larger number
//     if (num1 > num2) {
//     console.log("The larger integer is: " + num1);
//     }
//     else {
//     console.log("The larger integer is: " + num2);
//     }
//    }


//Q3 

// var number = prompt("Enter a number:");
// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }

//Q4

// var ch = prompt("Enter a character: ");
// if (ch.length === 1) {
//     switch (ch.toLowerCase()) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             console.log(`The character ${ch} is a vowel.`);
//             break;
//         default:
//             console.log(`The character ${ch} is not a vowel.`);
//             break;
//     }
// } else {
//     console.log("Invalid input. Please enter a single character.");
// }

//Q5 

// Step 1: Store correct password in a variable
// var correctPassword = "mypassword";
// // Step 2: Ask user to enter password
// var userPassword = prompt("Enter your password");
// // Step 3: Validate the password
// if (userPassword === "") {
//     // If user has not entered password
//     alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//     // If passwords match
//     alert("Correct! The password you entered matches the original password.");
// } else {// If passwords do not match
//     alert("Incorrect password");
// }

//Q6. 

// var greeting;
// var hour = 13;
// if (hour < 18) {
//  greeting = "Good day";
// } else {
//  greeting = "Good evening";
// }

//Q7. 

// var time = prompt("Enter time in 24-hour format (e.g. 19 for 7pm):");
// var hour = parseInt(time.substring(0, 2));
// if (hour >= 0 && hour < 12) {
//  alert("Good morning!");
// } else if (hour >= 12 && hour < 18) {
//  alert("Good afternoon!");
// } else if (hour >= 18 && hour < 24) {
//  alert("Good evening!");
// } else {
//  alert("Invalid input!");
// }

