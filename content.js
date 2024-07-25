// content.js

// Function to click the "Skip Ad" button if it appears
function clickSkipAdButton() {
    console.log('Checking for skip button...');

    // Use the correct CSS selector for the "Skip Ad" button
    const skipButton = document.querySelector('.ytp-skip-ad-button');

    if (skipButton) {
        skipButton.click();
        console.log('Skipped ad!');
    }
}

// Run the function every second to check for the "Skip Ad" button
setInterval(clickSkipAdButton, 1000);
