
function clickSkipAdButton() {
    console.log('Checking for skip button...');

    // Use the correct CSS selector for the "Skip Ad" button
    const skipButton = document.querySelector('.ytp-skip-ad-button');

    if (skipButton && isElementVisible(skipButton)) {
        skipButton.click();

    }
}

// Function to check if an element is visible
function isElementVisible(element) {
    const style = window.getComputedStyle(element);
    return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
}

// Run the function every second to check for the "Skip Ad" button
setInterval(clickSkipAdButton, 1000);
