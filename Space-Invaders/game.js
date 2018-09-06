var canvas;
var ctx;

var player;

var shots = [];
var enemies = [];
var enemyshots = [];
var stars = [];

var gameIsRunning = false;

var enemiesMoveDirection = 10;

var shootSound;
var explosionSound;
var killingInvadersSound;

var enemyCount = 25;

var score = 0;

var itemTypes = ["doubleShot", "tripple-shot", "superShot"];

var items = [];

function setupGame() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');

    // Creates Sound-Objects
    shootSound = new Sound("sounds/shoot.wav");
    explosionSound = new Sound("sounds/explosion.wav");
    killingInvadersSound = new Sound("sounds/invaderkilled.wav");
    initStars();
}

// Function, that's beeing executd, when the page's been fully loaded.
window.onload = function () {
    setupGame();

    // Starts the game loop.
    setInterval(function () {
        if (gameIsRunning) {
            loop();
        }
    }, 1000 / 20);
}

function loop() {
    // All the functions used to draw the whole game.
    clearBackground();
    showStars();
    moveEnemies();
    showEnemies();
    showShots();
    showEnemyshots();
    drawItembox();
    spawnItem();
    showItems();
    player.show();
    
    // Invokes enemyshots in randomly chosen intervals.
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].isShooting()) {
            invokeEnemyShot(enemies[i].x, enemies[i].y);
        }
    }

    for (var i = 0; i < enemyshots.length; i++) {
        if (enemyshots[i].isColiding(player)) {
            explosionSound.play();
            resetGame();
        }
    }

    // Checks, if the player's shot is coliding with an enemy.
    for (var i = 0; i < shots.length; i++) {
        for (var j = 0; j < enemies.length; j++) {
            if (shots[i].isColiding(enemies[j])) {
                score += 10;
                killingInvadersSound.play();
                shots.splice(i, 1);
                enemies.splice(j, 1);
            }
        }
    }
    drawText();
}

function spawnItem() {
    var rand = getRandomInt(1, 300);
    if(rand == 25) {
        items.push(new Item(itemTypes[getRandomInt(0, itemTypes.length)]));
    }
}

// Creates all the enemies.
function initEnemies() {
    for (var i = 0; i <= enemyCount; i++) {
        enemies.push(new Enemy());
    }
}

function initStars() {
    for(var i = 0; i < 150; i++) {
        stars.push(new Star());
    }
}

function pushNewStar() {
    stars.push(new Star());
}

// Adds a new Enemy
function pushNewEnemy() {
    enemies.push(new Enemy());
}

// Invokes a shot of an enemy.
function invokeEnemyShot(x, y) {
    enemyshots.push(new EnemyShot(x + 16, y + 16));
    shootSound.play();
}

// Invokes a shot of the player.
function invokeShot() {
    var playerX = player.x + player.w / 2 + 10;
    shots.push(new Shot(playerX + player.w / 4));
    shootSound.play();
}

// Moves the enemies at a randomly chosen time.
function moveEnemies() {
    var random = getRandomInt(0, 10);

    if (random == 5) {
        for (var i = 0; i < enemies.length; i++) {
            enemies[i].move();
        }
    }
}

function startGame() {
    document.getElementById('start').disabled = true;
    player = new Player();
    clearBackground();
    initEnemies();
    gameIsRunning = true;
}

function stopGame() {
    gameIsRunning = false;
}



function resetGame() {
    stopGame();
    document.getElementById('start').disabled = false;
    enemies.splice(0, enemies.length);
    enemyshots.splice(0, enemyshots.length);
    shots.splice(0, shots.length);
}