var padding = 10;

var GAME_PIECE = function(initX, initY, color){

    this.x = initX;
    this.y = initY;
    this.state_color = color;

    //Hardcode the enumeration because Javascript
    if(color == 1)
        this.fill_color = 'rgb(200, 0, 0)';
    else if(color == 2)
        this.fill_color = 'rgb(100, 100, 100)';

    console.log('Color: ' + color + '\nFill Color: ' + this.fill_color);

    this.draw = function(squareWidth, ctx){
        var x_position = (this.x * squareWidth) + squareWidth/2;
        var y_position = (this.y * squareWidth) + squareWidth/ 2;

        var radius = (squareWidth/2) - (padding/2);

        var path = new Path2D();
        path.arc(x_position, y_position, radius, 0, Math.PI*2, false);


        ctx.fillStyle = this.fill_color;
        ctx.fill(path);
        ctx.stroke(path);
    }

    this.clicked = function(gamestate){
        console.log('Square (' + this.x + ', ' + this.y + ') has been clicked');
    }

};
