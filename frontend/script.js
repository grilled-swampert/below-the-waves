const submarine = document.getElementById('submarine');
const body = document.body;

let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;
const speed = 40;
const maxDepth = window.innerHeight * 2; // Change this value to set how deep you want the scrollable area to be

// Update submarine position
function moveSubmarine() {
    submarine.style.left = `${posX}px`;
    submarine.style.top = `${posY}px`;
    body.style.backgroundColor = getColorBasedOnDepth(posY);
}

// Control submarine with WASD keys
document.addEventListener('keydown', (event) => {
    switch(event.key.toLowerCase()) {
        case 'w': posY -= speed; break; 
        case 'a': posX -= speed; break; 
        case 's': posY += speed; break;
        case 'd': posX += speed; break; 
    }
    
    if (posY > window.innerHeight / 2) {
        window.scrollTo(0, posY - window.innerHeight / 2);
    }
    
    moveSubmarine();
});

// Get color based on depth
function getColorBasedOnDepth(depth) {
    const maxDepthColor = '#001f3f'; // Dark blue
    const minDepthColor = '#a0d8ef'; // Light blue

    // Calculate the color interpolation
    const ratio = Math.min(1, depth / maxDepth);
    const r = Math.floor(lerp(hexToRgb(minDepthColor)[0], hexToRgb(maxDepthColor)[0], ratio));
    const g = Math.floor(lerp(hexToRgb(minDepthColor)[1], hexToRgb(maxDepthColor)[1], ratio));
    const b = Math.floor(lerp(hexToRgb(minDepthColor)[2], hexToRgb(maxDepthColor)[2], ratio));

    return `rgb(${r}, ${g}, ${b})`;
}

// Linear interpolation function
function lerp(start, end, ratio) {
    return start + (end - start) * ratio;
}

// Convert hex color to RGB
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
}

// Initialize submarine position
moveSubmarine();
