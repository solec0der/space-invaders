/**
 * Author:      Yannick Huggler
 * Game-Name:   Space-Invaders-Remastered
 * Descriptiom: A remastered version of the classic space-invaders.
 * 
 * Handles all the drawing operations that are needed for the game.
 */



// Handles all the text drawing.
function drawText() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score, 10, 25);
    ctx.fillText("Item", canvas.width - 70, 25, 50);
}

function drawItembox() {
    ctx.strokeStyle = 'white';
    ctx.strokeRect(canvas.width - 80, 40, 64, 64);
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

// Shows the Player's Shots.
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

function showItems() {
    for(var i = 0; i < items.length; i++) {
        items[i].show();
        items[i].move();
        if(items[i].isOffscreen()) {
            items.splice(i, 1);
            continue;
        }

        if(items[i].isColiding(player)) {
            player.setItem(items[i]);
            items.splice(i, 1);
        } 
    }
}