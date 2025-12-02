// Create a dictionary (object) with key-value pairs
let dictionary = {
    "apple": "A fruit that is typically red, green, or yellow.",
    "dog": "A domesticated carnivorous mammal.",
    "JavaScript": "A programming language used for web development.",
    "sun": "The star at the center of the solar system."
};

// Function to display a value from the dictionary
function displayDictionary() {
    // Example: Display the definition of 'apple'
    document.getElementById("Dictionary").innerHTML = dictionary["apple"];
}
// Create a dictionary (object) with key-value pairs
let dictionary = {
    "apple": "A fruit that is typically red, green, or yellow.",
    "dog": "A domesticated carnivorous mammal.",
    "JavaScript": "A programming language used for web development.",
    "sun": "The star at the center of the solar system."
};

// Function to display a value from the dictionary
function displayDictionary() {
    // Example: Display the definition of 'apple'
    document.getElementById("Dictionary").innerHTML = dictionary["apple"];
}

// Function to delete a value from the dictionary and display the result
function deleteFromDictionary() {
    // Delete the 'dog' entry from the dictionary
    delete dictionary["dog"];
    
    // Display the updated dictionary (will show "undefined" for deleted key)
    document.getElementById("Dictionary").innerHTML = dictionary["dog"] 
        ? dictionary["dog"] 
        : "The 'dog' entry has been deleted.";
}
