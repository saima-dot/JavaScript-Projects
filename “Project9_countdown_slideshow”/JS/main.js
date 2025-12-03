// ------------------------
// Countdown Function
// ------------------------
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds--;
        document.getElementById("timer").innerHTML = seconds;
        setTimeout(tick, 1000); // Wait 1 second
        if (seconds == -1) {
            alert("Time's up!");
        }
    }

    tick();
}

// ------------------------
// Slideshow Function
// ------------------------
var slideIndex = 0;
var slides = [
    "images/car1.jpg",
    "images/car2.jpg"
];

function changeSlide() {
    document.getElementById("slideshow").src = slides[slideIndex];
    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    setTimeout(changeSlide, 3000); // Change slide every 3 seconds
}

// Start the slideshow automatically
changeSlide();
