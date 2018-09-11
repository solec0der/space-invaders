/**
 * Author:      Yannick Huggler
 * Game-Name:   Space-Invaders-Remastered
 * Descriptiom: A remastered version of the classic space-invaders.
 * Filename:    item.js
 */

function Item(image, type) {
    this.x = getRandomInt(10, canvas.width - 10);
    this.y = -50;
    this.w = 32;
    this.h = 32;
    this.type = type;
    this.image = image;

    this.show = function () {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    this.move = function () {
        this.y += 15;
    }

    this.isOffscreen = function () {
        return this.y > canvas.height;
    }

    this.isColiding = function (player) {
        return !(
            ((this.y + this.h) < (player.y)) ||
            (this.y > (player.y + 15 + 15)) ||
            ((this.x + this.w) < player.x) ||
            (this.x > (player.x + 64))
        );
    }
}

