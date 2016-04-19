// 1) Declare two variables, a string and an integer named "fullName" and "age". Set them equal to your name and age.
var fullName = 'Bert McLees';
var age = 57;



// 2) Declare an empty array called "myArray". 
// Add the variables from #1 (fullName and age) to the empty array using the push method.
// Print to the console.
var myArray = [];
myArray.push(fullName);
myArray.push(age);
console.log(myArray);




// 3) Write a simple function that takes no parameters called "sayHello". 
// Make it print "Hello!" to the console when called.
// Call the function.
function sayHello() {
    console.log("Hello!");
}
sayHello();


// 4) Declare a variable named splitName and set it equal to
// fullName split into two seperate objects in an array.
// (In other words, if the variable fullName is equal to "John Smith", then splitName should 
// equal ["John", "Smith"].)
// Print splitName to the console.
// HINT: Remember to research the methods and concepts listed in the instructions PDF.
var splitName = fullName.split(" ");
console.log(splitName);


// 5) Write another simple function that takes no parameters called "sayName".
// When called, this function should print "Hello, ____!" to the console, where the blank is 
// equal to the first value in the splitName array from #4.
// Call the function.  (In our example, "Hello, John!" would be printed to the console.)
function sayName() {
    console.log(splitName[0]);
}
sayName();



// 6) Write another function named myAge.  This function should take one parameter: the year you 
// were born, and it should print the implied age to the console.
// Call the function, passing the year you were born as the argument/parameter.
// HINT: http://www.w3schools.com/js/js_functions.asp
function myAge (birthYear) {
    var newDate = new Date();
    var currentYear = newDate.getFullYear();
    var ageCalc = currentYear - birthYear;
    console.log("Depending on your specific birthdate, you are either " + ageCalc + " or " + --ageCalc + " years old");
}
myAge(1958);




// 7) Using the basic function given below, add code so that sum_odd_numbers will print to the console the sum of all the odd numbers from 1 to 5000.
// HINT: Consider using a 'for loop'.

function sum_odd_numbers() {
    var sum = 0;

    for (i = 1; i <= 5000; i++) { 
    if ((i%2) != 0) sum += i;
    }
    
    console.log("the inclusive sum = " + sum);
}
sum_odd_numbers();