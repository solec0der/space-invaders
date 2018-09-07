function Player() {
    this.w = 25;
    this.h = 25;
    this.x = canvas.width / 2 - this.w / 2;
    this.y = canvas.height - 35;
    this.item;
    this.isItemSet = false;

    this.show = function() {
        var image = new Image();
        image.src = "img/player.png";
          ctx.drawImage(image, this.x, this.y);

          if(this.isItemSet) {

            ctx.drawImage(this.item.image, canvas.width - 80, 40, 64, 64);
          }
    }

    this.move = function(dir) {
        if(dir == 0) {
            if(!(this.x < 0)) {
                this.x -= canvas.width / 20;
            }
        }  else {
            if(!(this.x > canvas.width - (2 * this.w))) {
                this.x += canvas.width / 20;
            }
        }
    }

    this.setItem = function(item) {
        this.item = item;
        this.isItemSet = true;
    }
}