
var SQUARE_STATE = {
    EMPTY: 0,
    P1: 1,
    P2: 2
};

var GAME_SQUARE = function(x, y, color, squareWidth, state){

    //EMPTY || RED || BLACK
    if(state != null)
        this.state = state;
    else
        this.state = 0; //EMPTY

    //X & Y GAME MAP POSITION
    this.x = x;
    this.y = y;

    //SQUARE RENDER COLOR
    this.color = color;

    this.squareWidth = squareWidth;
}

GAME_SQUARE.prototype.draw = function(ctx){

    //DRAW SQUARE
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x * this.squareWidth, this.y * this.squareWidth, this.squareWidth, this.squareWidth);

    //IF SQUARE CONTAINS GAME PIECE
    if(this.state != 0){

        //CENTER PIECE MID-SQUARE
        var padding = 10;
        var x_position = (this.x * this.squareWidth) + this.squareWidth/2;
        var y_position = (this.y * this.squareWidth) + this.squareWidth/ 2;
        var radius = (this.squareWidth / 2) - (padding / 2);

        var circle = new Path2D();
        circle.arc(x_position, y_position, radius, 0, Math.PI * 2, false);

        if(this.state == SQUARE_STATE.P1) ctx.fillStyle = 'rgb(200, 0, 0)';           //COLOR RED PIECE
        else if(this.state == SQUARE_STATE.P2) ctx.fillStyle = 'rgb(100, 100, 100)';  //COLOR BLACK PIECE

        ctx.fill(circle);   //DRAW PIECE
        ctx.stroke(circle); //DRAW OUTLINE
    }

};

GAME_SQUARE.prototype.clicked = function(gamestate){
    //TODO: SQUARE CLICKED STUFF
    
};