let streakDays = 0;
let dailyQuestProgress = { clicksToday: 0, questComplete: false };

function dailyLogin() {
  const lastLogin = localStorage.getItem('lastLoginDate');
  const today = new Date().toDateString();
  if (lastLogin !== today) {
    streakDays++;
    localStorage.setItem('lastLoginDate', today);
    saveGameState();
  }
}

function dailyQuest() {
  if (dailyQuestProgress.clicksToday >= 100 && !dailyQuestProgress.questComplete) {
    dailyQuestProgress.questComplete = true;
    currency += 50;
    saveGameState();
  }
}

function resetDailyQuest() {
  const today = new Date().toDateString();
  const lastQuestDate = localStorage.getItem('lastQuestDate');
  if (lastQuestDate !== today) {
    dailyQuestProgress = { clicksToday: 0, questComplete: false };
    localStorage.setItem('lastQuestDate', today);
    saveGameState();
  }
}

// Expose functions to the global window object
window.dailyLogin = dailyLogin;
window.dailyQuest = dailyQuest;
window.resetDailyQuest = resetDailyQuest;
