// Function to click the "Skip Ad" button if it appears and is visible
function clickSkipAdButton() {
    const skipButton = document.querySelector('.ytp-skip-ad-button');

    if (skipButton && isElementVisible(skipButton)) {
        setTimeout(() => {
            skipButton.click();

        }, getRandomDelay());
    }
}

// Function to check if an element is visible
function isElementVisible(element) {
    const style = window.getComputedStyle(element);
    return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
}

// Function to get a random delay between 1 and 3 seconds
function getRandomDelay() {
    return Math.floor(Math.random() * 2000) + 1000;
}

// Run the function every second to check for the "Skip Ad" button
setInterval(clickSkipAdButton, 1000);
