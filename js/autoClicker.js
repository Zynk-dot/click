function startAutoClickers() {
  setInterval(() => {
      window.score += window.autoClickerCount * window.multiplier;
      window.updateScoreDisplay();
      window.saveGameState();
  }, 1000);
}

function purchaseAutoClicker() {
  const autoClickerCost = 500 * (window.autoClickerCount + 1);
  if (window.score >= autoClickerCost) {
      window.score -= autoClickerCost;
      window.autoClickerCount++;
      window.saveGameState();
      window.updateScoreDisplay();
      console.log(`Purchased auto-clicker! Count: ${window.autoClickerCount}`);
  } else {
      console.log(`Not enough score to purchase auto-clicker. Required: ${autoClickerCost}`);
  }
}

// Expose functions globally
window.startAutoClickers = startAutoClickers;
window.purchaseAutoClicker = purchaseAutoClicker;
