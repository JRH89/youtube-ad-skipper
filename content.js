// Function to click the "Skip Ad" button if it appears and is visible
function clickSkipAdButton() {
    const skipButton = document.querySelector('.ytp-skip-ad-button');

    if (skipButton && isElementVisible(skipButton)) {
        setTimeout(() => {
            skipButton.click();
        }, getRandomDelay());
    }
}

// Function to click the warning close button if it appears and is visible
function clickCloseWarningButton() {
    const closeButton = document.querySelector('#dismiss-button > button-view-model > button');

    if (closeButton && isElementVisible(closeButton)) {
        setTimeout(() => {
            closeButton.click();
            clickPlayButton(); // Resume playing the video after closing the warning
        }, getRandomDelay());
    }
}

// Function to click the play button if it appears and is visible
function clickPlayButton() {
    const playButton = document.querySelector('.ytp-play-button');

    if (playButton && isElementVisible(playButton)) {
        setTimeout(() => {
            playButton.click();
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

// Run the functions every second to check for the "Skip Ad" button and warning close button
setInterval(() => {
    clickSkipAdButton();
    clickCloseWarningButton();
}, 1000);
