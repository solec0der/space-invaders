function Player() {
    this.w = 25;
    this.h = 25;
    this.x = canvas.width / 2 - this.w / 2;
    this.y = canvas.height - 35;

    this.show = function() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.w, this.h);  
    }

    this.move = function(dir) {
        if(dir == 0) {
            if(!(this.x < 0)) {
                this.x -= canvas.width / 20;
            }
        }  else {
            if(!(this.x > canvas.width - (2 * this.w))) {
                this.x += canvas.width / 20;
                console.log(this.x);
            }
        }
    }
}