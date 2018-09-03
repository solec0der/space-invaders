var canvas;
var ctx;

var player;

var shots = [];
var enemies = [];
var enemyshots = [];

var gameIsRunning = false;

var enemiesMoveDirection = 10;

var shootSound;
var explosionSound;
var killingInvadersSound;


// Function, that's beeing executd, when the page's been fully loaded.
window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    
    // Creates Sound-Objects
    shootSound = new Sound("sounds/shoot.wav");
    explosionSound = new Sound("sounds/explosion.wav");
    killingInvadersSound = new Sound("sounds/invaderkilled.wav");
    
    player = new Player();

    setBackground();
    initEnemies();

    setInterval(function() {
        if(gameIsRunning) {
            setBackground();
            moveEnemies();
            player.show();

            // Shows all the enemys.
            for(var i = 0; i < enemies.length; i++) {
                enemies[i].show();
            }

            // Invokes enemyshots in randomly chosen intervals.
            for(var i = 0; i < enemies.length; i++) {
                if(enemies[i].isShooting()) {
                    invokeEnemyShot(enemies[i].x, enemies[i].y);
                }
            }

            // Moves the PLayer's Shots.
            for(var i = 0; i < shots.length; i++) {
                shots[i].move();
                shots[i].show();
            }

            // Moves the Enemyshots.
            for(var i = 0; i < enemyshots.length; i++) {
                enemyshots[i].move();
                enemyshots[i].show();
            }

            // Checks, if the player's shot is coliding with an enemy.
            for(var i = 0; i < shots.length; i++) {
                for(var j = 0; j < enemies.length; j++) {
                    if(shots[i].isColiding(enemies[j])) {
                        killingInvadersSound.play();
                        shots.splice(i, 1);
                        enemies.splice(j, 1);
                    }
                }
            }
        }
        
    }, 1000/20);
}

// Creates all the enemies.
function initEnemies() {
    for(var i = 0; i <= 25; i++) {
        enemies.push(new Enemy());
    }
}

// Prepares the canvas for redrawing.
function setBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Invokes a shot of an enemy.
function invokeEnemyShot(x, y) {
    enemyshots.push(new EnemyShot(x, y));
    shootSound.play();
}

// Invokes a shot of the player.
function invokeShot() {
    var playerX = player.x;
    shots.push(new Shot(playerX + player.w / 4));
    shootSound.play();
}

// Moves the enemies at a randomly chosen time.
function moveEnemies() {
    var random = getRandomInt(0, 10);

    if(random == 5) {
        for(var i = 0; i < enemies.length; i++) {
           enemies[i].move();
        }
    }
}

// Listens to key input of player.
window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
 
    // 1) Left Arrow-Key, 2) Right Arrow-Key, 3) Spacebar
    if (key == 37) {
        player.move(0);
    } else if (key == 39) {
        player.move(1);
    } else if(key == 32) {
        invokeShot();
    }

 }

 function startGame() {
     gameIsRunning = true;
 }

 function stopGame() {
     gameIsRunning = false;
 }

 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
} 