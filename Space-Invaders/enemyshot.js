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
        return !(
            ( ( this.y + this.h ) < ( player.y ) ) ||
            ( this.y > ( player.y+15 + 15) ) ||
            ( ( this.x + this.w ) < player.x ) ||
            ( this.x > ( player.x + 64 ) )
        );
    }
}