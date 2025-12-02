// Example of type coercion

// Declare a variable with a string value
let numberString = "42";  // This is a string

// Try to add a number and a string (this will coerce the number into a string)
let result = numberString + 10;  // "42" + 10 will be coerced into "4210"

// Display the result using document.write()
document.write("Result of type coercion (string + number): " + result + "<br>");

// Show the type of 'result' (it will be a string after coercion)
document.write("The data type of the result is: " + typeof result + "<br>");

// Demonstrate type coercion with boolean and number
let booleanValue = true;
let numberValue = 5;

// Adding a boolean and a number, the boolean is coerced into a number (true becomes 1)
let coercedResult = booleanValue + numberValue; // true + 5 becomes 6

document.write("Result of coercing boolean and number (true + 5): " + coercedResult + "<br>");

// Show the type of the 'coercedResult'
document.write("The data type of the coercedResult is: " + typeof coercedResult + "<br>");

// Example of NaN (Not a Number)
let resultNaN = "hello" / 5;  // This operation will result in NaN
document.write("The result is: " + resultNaN + "<br>");

// Check if NaN is actually NaN using isNaN()
let checkNaN = isNaN("hello" / 5);  // This will return true since the result is NaN
document.write("isNaN() returned: " + checkNaN + "<br>");

// Check if a number is NaN using isNaN()
let checkValidNumber = isNaN(42);  // This will return false because 42 is a valid number
document.write("isNaN() returned: " + checkValidNumber + "<br>");

// Example of using the NOT operator (!)
let isTrue = true;  // A true value
let isFalse = false;  // A false value

// NOT operator will negate the value
let resultNotTrue = !isTrue;  // This will turn true into false
let resultNotFalse = !isFalse;  // This will turn false into true

document.write("The NOT of true is: " + resultNotTrue + "<br>");
document.write("The NOT of false is: " + resultNotFalse + "<br>");
