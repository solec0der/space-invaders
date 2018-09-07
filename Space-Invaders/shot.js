function Shot(x) {
    this.w = 5;
    this.h = 20;
    this.x = x;
    this.y = canvas.height - 20;

    this.show = function() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    this.move = function() {
        this.y -= 10;
    }

    this.isColiding = function(enemy) {  
        var a = this.x - enemy.x;
        var b = this.y - enemy.y;

        var c = Math.sqrt( a*a + b*b );

        return c < this.w + enemy.w;
    }
}