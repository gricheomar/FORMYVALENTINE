function moveButton() {
    const noButton = document.getElementById('noButton');
    
    // 1. Get the current position of the button
    const rect = noButton.getBoundingClientRect();
    
    // 2. Set the "Max Move" distance (change 150 to a smaller number if it's still too far)
    const moveDistance = 150; 

    // 3. Calculate a small random jump (left/right and up/down)
    let newX = rect.left + (Math.random() - 0.5) * moveDistance * 2;
    let newY = rect.top + (Math.random() - 0.5) * moveDistance * 2;

    // 4. Safety Check: Keep it within the visible screen so it never gets lost
    newX = Math.max(20, Math.min(newX, window.innerWidth - rect.width - 20));
    newY = Math.max(20, Math.min(newY, window.innerHeight - rect.height - 20));

    // 5. Apply the new position
    noButton.style.position = "fixed"; // Fixed keeps it relative to the screen
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}
function celebrate() {
    const question = document.getElementById('question');
    const image = document.getElementById('v-image');
    const buttons = document.querySelector('.buttons');
    
    question.innerHTML = "Yay! nhbkkkk ❤️";
    image.src = "us2.png";
    buttons.style.display = "none";
}