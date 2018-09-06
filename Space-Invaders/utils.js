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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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