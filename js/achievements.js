function checkAchievements(score) {
  const achievementsList = [
      { id: 1, name: 'First Click', condition: () => score >= 1, reward: 10 },
      { id: 2, name: '100 Clicks', condition: () => score >= 100, reward: 20 },
      { id: 3, name: '1,000 Clicks', condition: () => score >= 1000, reward: 50 },
  ];

  achievementsList.forEach(achievement => {
      if (achievement.condition() && !window.achievements.includes(achievement.id)) {
          window.achievements.push(achievement.id);
          window.currency += achievement.reward;
          console.log(`Achievement Unlocked: ${achievement.name} - Earned ${achievement.reward} currency!`);
          saveGameState();
          updateScoreDisplay(); // Update to reflect currency change
      }
  });
}

// Expose the function globally
window.checkAchievements = checkAchievements;
