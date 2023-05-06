//chap 3 Q1

var age = 30; // assigning the value of 30 to the age variable
alert("My age is " + age + " years old."); // displaying the value of the age variable in an alert box


//CHAP3 Q2

var visitCount = parseInt(localStorage.getItem("visitCount"));
// If the visitor has not been to the site before, set the visit count to 0
if(isNaN(visitCount)) {
 visitCount = 0;
}
// Increment the visit count for the current visit
visitCount++;
// Store the updated visit count in the browser's local storage for future visits
localStorage.setItem("visitCount", visitCount);
// Display the visit count on the webpage
document.write("You have visited this site " + visitCount + " times.");

//CHAP 3 Q3

var birthYear = 1998; // assigning the value of 1998 to the birthYear variable
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof(birthYear));

//CHAP 3 Q4

var visitorName = "MUBARAK"; // storing the visitor's name in a variable
var productTitle = "shirt"; // storing the product title in a variable
var quantity = 5; // storing the quantity of products the visitor wants to order in a variable
document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on online clothing store.");