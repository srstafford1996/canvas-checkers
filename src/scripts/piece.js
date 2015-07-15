var padding = 10;

var GAME_PIECE = function(initX, initY, color){

    this.x = initX;
    this.y = initY;
    this.color = color;

    this.draw = function(squareWidth, ctx){
        var x_position = (this.x * squareWidth) + squareWidth/2;
        var y_position = (this.y * squareWidth) + squareWidth/ 2;

        var radius = (squareWidth/2) - (padding/2);

        var path = new Path2D();
        path.arc(x_position, y_position, radius, 0, Math.PI*2, false);

        console.log('x: ' + x_position + '\ny:' + y_position);

        ctx.fill(path);
        ctx.stroke(path);
    }

};
