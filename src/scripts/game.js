
Colors = {
    EMPTY: 0,
    RED: 1,
    BLACK: 2
}
var GameManager = function(){

    //Constants
    this.boardSize = 8;
    this.squareWidth = 75;

    //State array initialization
    this.gamestate = [];
    for(var i = 0; i < this.boardSize; i++){
        this.gamestate[i] = [];
        for(j = 0; j < this.boardSize; j++){
            
            //Red pieces
            if(j < 3 && ((i+j)%2 == 0))
                this.gamestate[i][j] = new GAME_PIECE(i, j, Colors.RED);
            //Black pieces
            else if(j >= this.boardSize - 3 && ((i+j)%2 == 0))
                this.gamestate[i][j] = new GAME_PIECE(i, j, Colors.BLACK);
            //Empty slots
            else
                this.gamestate[i][j] = Colors.EMPTY;
        }
    }

    /**** SETUP CANVAS ****/
    this.canvas = document.getElementById('game');
    this.ctx = this.canvas.getContext('2d');

    var parentscope = this; //Javascript...
    this.canvas.addEventListener('click', function(event){
        var x =  Math.floor( (event.pageX - parentscope.canvas.offsetLeft) / parentscope.squareWidth )
        var y = Math.floor( (event.pageY - parentscope.canvas.offsetTop) / parentscope.squareWidth )

        if(parentscope.gamestate[x][y] != Colors.EMPTY)
            parentscope.gamestate[x][y].clicked(parentscope.gamestate);
    });
};

//Draw checkerboard
GameManager.prototype.drawBoard = function(){

    for(var i = 0; i < this.boardSize; i++){
        for(var j = 0; j < this.boardSize; j++){
            //Alternate square color
            if( (i+j)%2 == 1 )                  
                this.ctx.fillStyle = "rgb(0, 0, 0)";
            else                                
                this.ctx.fillStyle = "rgb(255, 255, 255)"; 

            //Draw square
            this.ctx.fillRect( j * this.squareWidth, i * this.squareWidth, this.squareWidth, this.squareWidth);

        }
    }
}

//Draw pieces
GameManager.prototype.drawPieces = function(){
    
    
    var parentscope = this; //Gotta do this because javascript

    this.gamestate.forEach(function(element){
        element.forEach(function(element){
            if(element != Colors.EMPTY)
                element.draw(parentscope.squareWidth, parentscope.ctx);
        });
    });
};

var GM = new GameManager();
GM.drawBoard();
GM.drawPieces();