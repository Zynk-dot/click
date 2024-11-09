function dailyLogin() {
  const lastLogin = localStorage.getItem('lastLoginDate');
  const today = new Date().toDateString();
  if (lastLogin !== today) {
      window.streakDays++;
      localStorage.setItem('lastLoginDate', today);
      saveGameState();
  }
}

function dailyQuest() {
  if (window.dailyQuestProgress.clicksToday >= 100 && !window.dailyQuestProgress.questComplete) {
      window.dailyQuestProgress.questComplete = true;
      window.currency += 50;
      saveGameState();
  }
}

function resetDailyQuest() {
  const today = new Date().toDateString();
  const lastQuestDate = localStorage.getItem('lastQuestDate');
  if (lastQuestDate !== today) {
      window.dailyQuestProgress = { clicksToday: 0, questComplete: false };
      localStorage.setItem('lastQuestDate', today);
      saveGameState();
  }
}

// Expose functions globally
window.dailyLogin = dailyLogin;
window.dailyQuest = dailyQuest;
window.resetDailyQuest = resetDailyQuest;
