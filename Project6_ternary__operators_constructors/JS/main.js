// Example of a Ternary Operator
let age = 18;
let canDrive = (age >= 16) ? "You can drive!" : "You are too young to drive.";
document.getElementById("output").innerHTML = "Ternary Operator Result: " + canDrive + "<br>";

// Constructor Function Example: Car
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.displayInfo = function() {
        return `${this.year} ${this.make} ${this.model}`;
    };
}

// Create a new instance of the Car object
let myCar = new Car("Toyota", "Corolla", 2020);

// Display car info
document.getElementById("output").innerHTML += "Car Constructor Result: " + myCar.displayInfo();
