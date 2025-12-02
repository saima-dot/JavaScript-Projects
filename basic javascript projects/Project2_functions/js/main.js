// Function to concatenate strings and display in the paragraph
function showMessage() {
    let firstName = "John";
    let lastName = "Doe";

    // Initialize message variable
    let message = "Hello, ";

    // Concatenate using += operator
    message += firstName + " " + lastName + "!";

    // Display the concatenated string in the paragraph
    document.getElementById("output").innerHTML = message;
}

