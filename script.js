//your JS code here. If required.
// Function to change the color of the squares on hover
function hoverEffect(event) {
    // Get all the squares
    const squares = document.querySelectorAll('.square');

    // Loop through the squares and change their color except the one being hovered
    squares.forEach(square => {
        if (square !== event.target) {
            square.style.backgroundColor = '#6F4E37'; // Coffee color
        }
    });
}

// Function to reset the colors when the mouse leaves the square
function resetColors() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = '#E6E6FA'; // Lavender color
    });
}

// Attach event listeners to each square
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mouseenter', hoverEffect);
    square.addEventListener('mouseleave', resetColors);
});

