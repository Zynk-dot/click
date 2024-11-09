let lastClickTime = 0;
let clickCount = 0;

function isCheating() {
    const now = Date.now();
    const timeSinceLastClick = now - lastClickTime;
    lastClickTime = now;

    if (timeSinceLastClick < 20) clickCount++;
    else clickCount = 1;

    return clickCount > 55;
}

// Expose functions to the global window object
window.isCheating = isCheating;
