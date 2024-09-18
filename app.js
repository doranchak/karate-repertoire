let shuffledStrings = [];
let currentIndex = 0;

// Function to shuffle the array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to display the current string
function displayString(inc) {
    currentIndex = (shuffledStrings.length + currentIndex + inc) % shuffledStrings.length;    
    console.log(currentIndex, shuffledStrings[currentIndex]);
    document.getElementById('display').textContent = shuffledStrings[currentIndex];
    document.getElementById('count').textContent = ("[" + (currentIndex+1) + " of " + shuffledStrings.length + "]");
}

function shuffle() {
    shuffleArray(shuffledStrings);
    currentIndex = -1;
    displayString(1);
}

// Function to handle keydown events and limit to Enter and Space
function handleKeydown(event) {
    if (event.code === 'Enter' || event.code === 'Space' || event.code === 'ArrowRight') {
        displayString(1);
    } else if (event.code === 'ArrowLeft') {
        displayString(-1);
    }
}

// Initialize the shuffled list and set up the key press event listener
function init() {
    shuffledStrings = [...strings];  // Copy the list
    shuffleArray(shuffledStrings);

    // Show the first string on Enter or Space key press
    currentIndex = -1;
    document.addEventListener('keydown', handleKeydown);
}

init();
