// Get elements from the DOM
const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Initialize the count
let count = 0;

// Update the count element with the current count value
function updateCount() {
    countElement.textContent = count;
}

// Increment the count when the "+" button is clicked
incrementButton.addEventListener('click', () => {
    count++;
    updateCount();
});

// Decrement the count when the "-" button is clicked
decrementButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCount();
    }
});

// Reset the count to 0 when the "Reset" button is clicked
resetButton.addEventListener('click', () => {
    count = 0;
    updateCount();
});

// Initial count update
updateCount();