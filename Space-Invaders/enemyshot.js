function EnemyShot(x, y) {
    this.w = 5;
    this.h = 20;
    this.x = x;
    this.y = y;

    this.show = function() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    this.move = function() {
        this.y += 10;
    }

    this.isColiding = function(player) {  
        var a = this.x - player.x - 32;
        var b = this.y - player.y;

        var c = Math.sqrt(a*a + b*b);

        if(c < this.w + player.w) {
            return true;
        } else {
            return false;
        }
    }
}