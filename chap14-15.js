//Q7 

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h3>Qualifications:</h3>");
// document.write("<ul>");
// for (var i = 0; i < qualifications.length; i++) {
//  document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ul>");


//Q8
// Store student names and scores
// var studentNames = ["AHMED", "FARAZ", "JUNAID"];
// var studentScores = [320, 420, 490];
// // Calculate percentages
// var totalMarks = 500;
// var percentages = [];
// for (var i = 0; i < studentScores.length; i++) {
//  percentages.push((studentScores[i] / totalMarks) * 100);}
//  // Display scores and percentages
//  for (var i = 0; i < studentNames.length; i++) {
//   document.write("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: "
//  + percentages[i] + "%<br>");
//  }

//Q10

// declare and initialize array with student scores
var scores = [75, 90, 60, 80, 85];
// sort array in ascending order
scores.sort(function(a, b){return a - b});
// display sorted array in console
console.log(scores);

//Q11. // Initialize an array with city names
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// Create an empty array to store selected cities
var selectedCities = [];
// Copy 3 array elements from cities array to selectedCities array
selectedCities = cities.slice(1, 4);
// Display the original and selected cities array in the console
console.log("Cities array: " + cities);
console.log("Selected cities array: " + selectedCities);

//Q15. // create an array of phone manufacturers
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// display a dropdown/select menu using document.write() method
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");