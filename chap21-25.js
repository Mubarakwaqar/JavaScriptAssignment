//Q1. // take user input for first and last name
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
// merge first and last name into a new variable
var fullName = firstName + " " + lastName;
// greet the user using their full name
alert("Hello, " + fullName + "! Welcome to our SMIT.");

//Q2 // take user input for favorite mobile phone model
var favoriteModel = prompt("Please enter your favorite mobile phone model:");
// find the length of user input
var length = favoriteModel.length;
// display the length in the browser
document.write("The length of your favorite mobile phone model is: " + length);

//Q3. // find the index of letter "n" in the word "Pakistani"
var word = "Pakistani";
var index = word.indexOf("n");
// display the result in the browser
document.write("The index of letter 'n' in the word 'Pakistani' is: " + index);

//Q4. // find the last index of letter "l" in the word "Hello World"
var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
// display the result in the browser
document.write("The last index of letter 'l' in the word 'Hello World' is: " + lastIndex);

//Q5. // find the character at the 3rd index in the word "Pakistani"
var word = "Pakistani";
var character = word.charAt(3);
// display the result in the browser
document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);

//Q6
// take user inputs for first and last name
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
// merge the first and last name in a new variable titled fullName
var fullName = firstName.concat(" ", lastName);
// greet the user using their full name
document.write("Hello, " + fullName + "!");



// //Q7 // replace the substring "Hyder" with "Islam" in the word "Hyderabad"
var word = "Hyderabad";
var newWord = word.replace("Hyder", "Islam");
// display the result in the browser
document.write("The new word is: " + newWord);


// //Q8 // replace all occurrences of "and" with "&" in the string
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replaceAll("and", "&");
// display the result in the browser
document.write("The new message is: " + newMessage);


// //Q9 // convert the string "472" to a number
var stringNumber = "472";
var number = Number(stringNumber);
// display the values and types in the browser
document.write("Value: " + number + "<br>");
document.write("Type: " + typeof number);


// //Q10 // take user input and convert it to capital letters
var userInput = prompt("Enter some text:");
var capitalizedText = userInput.toUpperCase();
// display the result in the browser
document.write("Original text: " + userInput + "<br>");
document.write("Capitalized text: " + capitalizedText);


// //Q11 // define a function to convert a string to title case
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
// take user input and convert it to title case
var userInput = prompt("Enter some text:");
var titleCaseText = toTitleCase(userInput);
// display the result in the browser
document.write("Original text: " + userInput + "<br>");
document.write("Title case text: " + titleCaseText);


// //Q12 // convert the number to a string and remove the dot
var num = 35.36;
var str = num.toString().replace(".", "");
// display the result in the browser
document.write("Original number: " + num + "<br>");
document.write("Converted string: " + str);


// //Q13 // take user input for username
var username = prompt("Enter your username:");
// check if username contains any special symbols
if (username.includes("@") || username.includes(".") || username.includes(",") ||
    username.includes("!")) {
    // prompt the user to enter a valid username
    username = prompt("Invalid username! Please enter a valid username without any special symbols (@, ., ,, !):");
}
// display the final username in the browser
document.write("Your username is: " + username);