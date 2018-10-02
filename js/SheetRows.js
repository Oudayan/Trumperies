function SheetRows(x, y, sheet, nbRows, nbCols, width, height, scaleX, scaleY, context) {
    "use strict";
    
    // Variables
    var i = 0;
    var j = 0;
    
    // Propriétés
    this.x = x;
    this.y = y;
    this.sheet = sheet;
    this.nbRows = nbRows;
    this.nbCols = nbCols;
    this.width = width;
    this.height = height;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.context = context;
    
    // Méthode
    this.display = function () {
        // console.log("i = " + i, "j = " + j);
        this.context.save();
        this.context.translate(this.x, this.y);
        this.context.scale(this.scaleX, this.scaleY);
        // drawImage(sheet, xs, ys, Ls, Hs, xd, yd, Ld, Hd)
        this.context.drawImage(this.sheet, i * this.width, j * this.height, this.width, this.height, -this.width / 2, -this.height / 2, this.width, this.height);
        this.context.restore();
        i += 1;
        if (i >= this.nbCols) {
            i = 0;
            j += 1;
            if (j >= this.nbRows) {
                j = 0;
            }
        }
    };
}