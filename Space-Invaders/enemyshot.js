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

    this.isColiding = function(enemy) {  
        var a = this.x - enemy.x;
        var b = this.y - enemy.y;

        var c = Math.sqrt( a*a + b*b );

        if(c < this.w + enemy.w) {
            return true;
        } else {
            return false;
        }
    }
}