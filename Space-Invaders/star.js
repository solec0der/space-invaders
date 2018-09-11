/**
 * Author:      Yannick Huggler
 * Game-Name:   Space-Invaders-Remastered
 * Descriptiom: A remastered version of the classic space-invaders.
 * Filename:    star.js
 */

function Star() {
    this.x = getRandomInt(0, canvas.width);
    this.y = getRandomInt(0, canvas.height + 200);
    this.r = getRandomInt(1, 5);
    this.speed = 5;

    this.show = function() {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(this.x, this.y, this.r, this.r, 2 * Math.PI);
        ctx.fill(); 
    }

    this.move = function() {
        this.y += this.speed;
    }

    this.isOffscreen = function() {
        if(this.y > canvas.width) {
            this.x = getRandomInt(0, canvas.width);
            this.y = getRandomInt(-200, 0);
        }
    }
}