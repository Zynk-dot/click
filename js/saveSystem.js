window.score = 0;
window.multiplier = 1;
window.currency = 0;
window.autoClickerCount = 0;
window.streakDays = 0;
window.achievements = [];
window.dailyQuestProgress = { clicksToday: 0, questComplete: false };
window.buildings = {
    heartFactory: { count: 0, baseCost: 100, income: 1, costScaling: 1.1 },
    loveLaboratory: { count: 0, baseCost: 500, income: 5, costScaling: 1.15 },
    cupidWorkshop: { count: 0, baseCost: 2000, income: 20, costScaling: 1.2 }
};
window.multiplierCost = 100;

function loadGameState() {
    const savedState = JSON.parse(localStorage.getItem('heartClickerGameState'));
    if (savedState) {
        Object.assign(window, savedState);
    }
}

function saveGameState() {
    const gameState = {
        score: window.score,
        multiplier: window.multiplier,
        currency: window.currency,
        autoClickerCount: window.autoClickerCount,
        streakDays: window.streakDays,
        achievements: window.achievements,
        dailyQuestProgress: window.dailyQuestProgress,
        buildings: window.buildings,
        multiplierCost: window.multiplierCost
    };
    localStorage.setItem('heartClickerGameState', JSON.stringify(gameState));
}

function wipeSave() {
    localStorage.removeItem('heartClickerGameState');
    window.score = 0;
    window.multiplier = 1;
    window.currency = 0;
    window.autoClickerCount = 0;
    window.streakDays = 0;
    window.achievements = [];
    window.dailyQuestProgress = { clicksToday: 0, questComplete: false };
    window.buildings = {
        heartFactory: { count: 0, baseCost: 100, income: 1, costScaling: 1.1 },
        loveLaboratory: { count: 0, baseCost: 500, income: 5, costScaling: 1.15 },
        cupidWorkshop: { count: 0, baseCost: 2000, income: 20, costScaling: 1.2 }
    };
    window.multiplierCost = 100;
    saveGameState();
    updateScoreDisplay();
    updateMultiplierDisplay();
    window.updateBuildingUI();
    console.log("Game has been reset.");
}

// Attach functions to the global window object
window.loadGameState = loadGameState;
window.saveGameState = saveGameState;
window.wipeSave = wipeSave;
