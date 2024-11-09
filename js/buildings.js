function calculateCost(building) {
  return Math.floor(building.baseCost * Math.pow(building.costScaling, building.count));
}

function purchaseBuilding(buildingKey) {
  const building = window.buildings[buildingKey];
  const cost = calculateCost(building);

  if (window.score >= cost) {
      window.score -= cost;
      building.count++;
      window.saveGameState();
      window.updateScoreDisplay();
      window.updateBuildingUI();
      console.log(`Purchased ${buildingKey}! New count: ${building.count}`);
  } else {
      console.log(`Not enough score to purchase ${buildingKey}. Required: ${cost}`);
  }
}

function calculateTotalIncome() {
  let totalIncome = 0;
  for (const buildingKey in window.buildings) {
      const building = window.buildings[buildingKey];
      totalIncome += building.count * building.income;
  }
  return totalIncome;
}

function startBuildingIncome() {
  setInterval(() => {
      window.score += calculateTotalIncome();
      window.updateScoreDisplay();
      window.saveGameState();
  }, 1000);
}

function updateBuildingUI() {
  document.getElementById('heartFactoryCost').textContent = calculateCost(window.buildings.heartFactory);
  document.getElementById('heartFactoryCount').textContent = `Count: ${window.buildings.heartFactory.count}`;
  
  document.getElementById('loveLaboratoryCost').textContent = calculateCost(window.buildings.loveLaboratory);
  document.getElementById('loveLaboratoryCount').textContent = `Count: ${window.buildings.loveLaboratory.count}`;
  
  document.getElementById('cupidWorkshopCost').textContent = calculateCost(window.buildings.cupidWorkshop);
  document.getElementById('cupidWorkshopCount').textContent = `Count: ${window.buildings.cupidWorkshop.count}`;
  
  document.getElementById('totalIncome').textContent = calculateTotalIncome();
}

// Expose all functions to the global window object
window.purchaseBuilding = purchaseBuilding;
window.startBuildingIncome = startBuildingIncome;
window.updateBuildingUI = updateBuildingUI;
