function Enemy(x, y, start, speed, id, image, scaleX, scaleY, context) {
    // Propriétés
    "use strict";
    this.x = x;
    this.y = y;
    this.start = start;
    this.speed = speed;
    this.id = id;
    this.image = image;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.context = context;
    
    //Méthode
    this.display = function () {
        this.context.save();
        this.context.translate(this.x, this.y);
        this.context.scale(this.scaleX, this.scaleY);
        this.context.drawImage(this.image, -this.image.width / 2, -this.image.height / 2);
        this.context.restore();
    };
}