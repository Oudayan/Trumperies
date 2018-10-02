//classe spritesheet en rangées
function SheetRowsCols(x, y, speed, direction, rad, sheet, ticsPerImage, reverse, nbImages, imageWidth, imageHeight, xStart, yStart, scaleX, scaleY, canvas, context) {
	//variables
	"use strict";
    var indexImage = 0, i = 0;
	//proprietes
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.direction = direction;
    this.rad = rad;
	this.sheet = sheet;
	this.ticsPerImage = ticsPerImage;
	this.reverse = reverse;
	this.nbImages = nbImages;
	this.imageWidth = imageWidth;
	this.imageHeight = imageHeight;
	this.xStart = xStart;
	this.yStart = yStart;
	this.scaleX = scaleX;
	this.scaleY = scaleY;
	this.canvas = canvas;
	this.context = context;
	
    //Méthodes
    this.up = function (t) {
        this.y -= this.speed * t;
        this.limit();
    };
    
    this.down = function (t) {
        this.y += this.speed * t;
        this.limit();
    };
    
    this.left = function (t) {
        this.x -= this.speed * t;
        this.limit();
    };

    this.right = function (t) {
        this.x += this.speed * t;
        this.limit();
    };

    this.limit = function () {
        if (this.x < this.imageWidth * this.scaleX / 2) {
            this.x = this.imageWidth * this.scaleX / 2;
        }
        if (this.x > this.canvas.width - this.imageWidth * this.scaleX / 2) {
            this.x = this.canvas.width - this.imageWidth * this.scaleX / 2;
        }
        if (this.y < this.imageHeight * this.scaleY / 2) {
            this.y = this.imageHeight * this.scaleY / 2;
        }
        if (this.y > this.canvas.height - this.imageHeight * this.scaleY / 2) {
            this.y = this.canvas.height - this.imageHeight * this.scaleY / 2;
        }
    };

	this.display = function () {
		this.context.save();
		this.context.translate(this.x, this.y);
		this.context.scale(this.scaleX, this.scaleY);
		//drawImage(sheet,Xs,Ys,Ls,Hs,Xd,Yd,Ld,Hd)
		this.context.drawImage(this.sheet, this.xStart + indexImage * this.imageWidth, this.yStart, this.imageWidth, this.imageHeight, -this.imageWidth / 2, -this.imageHeight / 2, this.imageWidth, this.imageHeight);
		this.context.restore();
		//on incrémente le nb de tics
		i += 1;
		//si on depasse le nb ticsPerImage 
		if (i > this.ticsPerImage) {
			i = 0;//on reset le nb de tics
            if (this.reverse) {
                // si on est dans le range des images 
                if (indexImage > 0) {
				// on va à l'image précédente
				    indexImage -= 1;
                } else {
                    //on revient à la premiere image
                    indexImage = this.nbImages - 1;
                }
            } else {
                // si on est dans le range des images 
                if (indexImage < this.nbImages - 1) {
				    indexImage += 1;
                } else {
                    //on revient à la premiere image
                    indexImage = 0;
                }
			}
		}
	};
}
