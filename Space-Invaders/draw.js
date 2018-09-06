// Handles all the text drawing.
function drawText() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score, 10, 40);
    ctx.fillText("Item", canvas.width - 65, 100, 50);
}

function drawItembox() {
    ctx.strokeStyle = 'white';
    ctx.strokeRect(canvas.width - 70, 20, 50, 50);
    ctx.stroke();
}

// Clears the background.
function clearBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Shows all the enemys.
function showEnemies() {
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].show();
    }
}

// Shows the PLayer's Shots.
function showShots() {
    for (var i = 0; i < shots.length; i++) {
        shots[i].move();
        shots[i].show();
    }
}

function showEnemyshots() {
    for (var i = 0; i < enemyshots.length; i++) {
        enemyshots[i].move();
        enemyshots[i].show();
    }
}

function showStars() {
    for(var i = 0; i < stars.length; i++) {
        stars[i].show();
        stars[i].move();
        stars[i].isOffscreen();
    }
}