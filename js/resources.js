let resources = { heartFragments: 0 };

function collectHeartFragment() {
    resources.heartFragments += 1;
    saveGameState();
}

function bonusResourceDrop() {
    if (window.score >= 5000 && Math.random() < 0.1) {
        resources.heartFragments += 10;
        console.log("Bonus resource drop! You collected 10 extra heart fragments.");
        saveGameState();
    }
}

// Attach functions and resources to the global window object
window.collectHeartFragment = collectHeartFragment;
window.bonusResourceDrop = bonusResourceDrop;
window.resources = resources;
