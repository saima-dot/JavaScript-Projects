// Global variable
let globalVar = "I am a global variable!";

// Function to demonstrate local variable and error
function demoFunction() {
    let localVar = "I am a local variable!";
    console.log(localVar); // This will work fine

    // Intentionally create an error by trying to access a local variable outside the function
    console.log(nonExistentVar);  // This will throw an error because 'nonExistentVar' is not defined
}

// Call the demoFunction to check the error
demoFunction();

// Log the global variable
console.log(globalVar);  // This will work fine

// Try accessing local variable (this will cause an error because it's outside the function scope)
console.log(localVar);  // This will throw an error because 'localVar' is not defined in this scope
