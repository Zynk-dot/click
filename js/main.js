document.addEventListener("DOMContentLoaded", () => {

  function updateScoreDisplay() {
      document.getElementById('score').textContent = window.score;
      document.getElementById('currency').textContent = window.currency;
      document.getElementById('multiplier').textContent = window.multiplier;
  }

  window.updateScoreDisplay = updateScoreDisplay;

  function initUI() {
      updateScoreDisplay();
      window.updateBuildingUI();
      window.updateMultiplierDisplay();
  }

  const heartButton = document.getElementById('heart');
  if (heartButton) {
      const currencyDropRate = 0.1; // 10% chance per click to earn currency

      heartButton.addEventListener('click', () => {
          if (window.isCheating()) return;
          window.score += window.multiplier;
          if (Math.random() < currencyDropRate) {
              window.currency += 5; // Earn 5 currency randomly
              console.log("You earned 5 currency!");
          }
          window.dailyQuest();
          window.checkAchievements(window.score);
          updateScoreDisplay();
          window.saveGameState();
      });
  }

  document.getElementById('buyMultiplier')?.addEventListener('click', () => {
      window.upgradeMultiplier();
  });

  document.getElementById('buyHeartFactory')?.addEventListener('click', () => {
      window.purchaseBuilding('heartFactory');
      window.updateBuildingUI();
  });

  document.getElementById('buyLoveLaboratory')?.addEventListener('click', () => {
      window.purchaseBuilding('loveLaboratory');
      window.updateBuildingUI();
  });

  document.getElementById('buyCupidWorkshop')?.addEventListener('click', () => {
      window.purchaseBuilding('cupidWorkshop');
      window.updateBuildingUI();
  });

  document.getElementById('wipeSave')?.addEventListener('click', () => {
      if (confirm("Are you sure you want to reset your game? This will erase all progress!")) {
          window.wipeSave();
      }
  });

  window.loadGameState();
  window.startAutoClickers();
  window.startBuildingIncome();
  window.dailyLogin();
  window.resetDailyQuest();
  initUI();
});
