function addingEventListener() {
    const input = document.getElementById('button'); // Get the input element
    
    // Define the click alert function
    function clickAlert() {
        alert('I was clicked!');
    }

    // Add the event listener for the click event
    input.addEventListener('click', clickAlert);
}

// Call the function to activate the event listener
addingEventListener();