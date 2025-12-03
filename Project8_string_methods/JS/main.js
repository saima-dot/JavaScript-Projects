// concat() METHOD
// This function connects (concatenates) several strings into one sentence.
function concatFunction() {
    var part1 = "Learning ";
    var part2 = "JavaScript ";
    var part3 = "string methods.";
    var fullSentence = part1.concat(part2, part3); // Combine strings
    document.getElementById("concat_result").innerHTML = fullSentence; // Display result
}

// slice() METHOD
// This function takes a portion of a string using slice(start, end)
function sliceFunction() {
    var sentence = "JavaScript is awesome!";
    var section = sentence.slice(0, 10); // Takes the first 10 characters
    document.getElementById("slice_result").innerHTML = section; // Display result
}

// toString() METHOD
// This function converts a number into a string
function toStringFunction() {
    var number = 2025;
    var stringVersion = number.toString(); // Convert number to string
    document.getElementById("toString_result").innerHTML = stringVersion; // Display result
}

// toPrecision() METHOD
// This method formats a number to a specified length
function precisionFunction() {
    var num = 123.456789;
    var preciseNum = num.toPrecision(5); // Formats number to 5 digits
    document.getElementById("precision_result").innerHTML = preciseNum; // Display result
}


   
