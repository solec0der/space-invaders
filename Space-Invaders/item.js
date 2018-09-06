function Item(type) {
    this.x = getRandomInt(10, canvas.width - 10);
    this.y = -50;
    this.w = 32;
    this.h = 32;
    this.type = type;
    this.image;

    this.show = function() {
        var image = new Image();
        image.src = "img/items/" + this.type + ".png";
        ctx.drawImage(image, this.x, this.y, this.w, this.h);
    }

    this.move = function() {
        this.y += 15;
    }

    this.isOffscreen = function() {
        return this.y > canvas.height;
    }

    this.isColiding = function() {
        
    }
}