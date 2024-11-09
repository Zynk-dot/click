window.multiplier = 1;
window.multiplierCost = 100;

function upgradeMultiplier() {
    if (window.score >= window.multiplierCost) {
        window.score -= window.multiplierCost;
        window.multiplier += 1;
        window.multiplierCost = Math.floor(window.multiplierCost * 1.5);
        saveGameState();
        updateScoreDisplay(); // Update score immediately after deducting
        updateMultiplierDisplay();
        console.log(`Upgraded multiplier to ${window.multiplier}. New cost: ${window.multiplierCost}`);
    } else {
        console.log(`Not enough score to upgrade multiplier. Required: ${window.multiplierCost}`);
    }
}

function updateMultiplierDisplay() {
    document.getElementById('multiplier').textContent = window.multiplier;
    document.getElementById('multiplierCost').textContent = window.multiplierCost;
}

window.upgradeMultiplier = upgradeMultiplier;
window.updateMultiplierDisplay = updateMultiplierDisplay;
