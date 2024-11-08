let score = 0;
let heartsPerSecond = 0;

const heartClicker = document.getElementById("heart-clicker");
const scoreDisplay = document.getElementById("score");
const hpsDisplay = document.getElementById("hearts-per-second");
const buildingsList = document.getElementById("buildings-list");

const buildings = {
    cursor: {
        cost: 20,
        heartsPerSecond: 1,
        owned: 0
    },
    heartTransplant: {
        cost: 150,
        heartsPerSecond: 10,
        owned: 0
    },
    heartFactory: {
        cost: 500,
        heartsPerSecond: 25,
        owned: 0
    },
    heartLaboratory: {
        cost: 2000,
        heartsPerSecond: 100,
        owned: 0
    }
};

// Handle heart clicking
heartClicker.addEventListener("click", () => {
    score++;
    updateScore();
    updateBuildingsStatus();
    createFallingHeart();  // Call this function to create a falling heart
});

// Buy buildings/upgrades
buildingsList.addEventListener("click", function (e) {
    const target = e.target;
    if (target.classList.contains("building")) {
        const buildingId = target.id.replace('-', '');  // Fix the hyphen issue with ID names
        const building = buildings[buildingId];
        
        if (score >= building.cost) {
            score -= building.cost;
            building.owned += 1;
            heartsPerSecond += building.heartsPerSecond;

            // Increase the cost for the next building (slightly exponential growth)
            building.cost = Math.floor(building.cost * 1.15);

            updateScore();
            updateBuildingsStatus();
            updateBuildingDisplay(buildingId);
        }
    }
});

// Automatically add hearts based on hearts per second
setInterval(() => {
    score += heartsPerSecond;
    updateScore();
}, 1000);

function updateBuildingsStatus() {
    Object.keys(buildings).forEach(buildingId => {
        const building = buildings[buildingId];
        const buildingElement = document.getElementById(buildingId.replace('T', '-t'));  // Fix ID lookup
        if (buildingElement) {
            if (score >= building.cost) {
                buildingElement.style.backgroundColor = '#d3d3d3';
                buildingElement.style.cursor = 'pointer';
            } else {
                buildingElement.style.backgroundColor = '#e1e1e1';
                buildingElement.style.cursor = 'not-allowed';
            }
        }
    });
}

// Update the score display and hearts per second
function updateScore() {
    scoreDisplay.textContent = score;
    hpsDisplay.textContent = heartsPerSecond;
}

// Update building display after purchasing (format: doesn't change static HTML)
function updateBuildingDisplay(buildingId) {
    const building = buildings[buildingId];
    const buildingElement = document.getElementById(buildingId.replace('T', '-t'));  // Fix ID lookup
    if (buildingElement) {
        // We don't update the inner text since the structure is static; could add tooltips etc. if needed
    }
}

// Capitalize building name for display
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).replace('-', ' ');
}

// Create falling hearts on click
function createFallingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.style.left = Math.random() * 100 + 'vw';
    document.querySelector('.falling-hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);  // Adjust this to the duration of the animation
}
