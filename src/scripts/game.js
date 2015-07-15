
var GameManager = {
    //Enums
    EMTPY: 0,
    RED: 1,
    BLACK: 2,
    //Constants
    boardSize: 8,
    squareWidth: 75,

    //State array
    gamestate: []
}

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');



//Draw board and fill gamestate array
for(var i = 0; i < GameManager.boardSize; i++){

    GameManager.gamestate[i] = new Array();

    for(var j = 0; j < GameManager.boardSize; j++){

        GameManager.gamestate[i][j] = GameManager.EMPTY;

        //Alternate square color
        if( (i+j)%2 == 1 )                  
            ctx.fillStyle = "rgb(0, 0, 0)";
        else                                
            ctx.fillStyle = "rgb(255, 255, 255)"; 

        //Draw square
        ctx.fillRect( j * GameManager.squareWidth, i * GameManager.squareWidth, GameManager.squareWidth, GameManager.squareWidth);

        
    }
}

//Create red pieces
var red_pieces = [];
for(var i = 0; i < GameManager.boardSize; i++){

    for(var j = 0; j < 3; j++){

        if( (i+j)% 2 == 0 ){
            GameManager.gamestate[i][j] = GameManager.RED;
            red_pieces.push(new GAME_PIECE(i, j, GameManager.RED));
        }

    }
}

//Create black pieces
var black_pieces = [];
for(var i = 0; i < GameManager.boardSize; i++){

    for(var j = GameManager.boardSize - 1; j >= GameManager.boardSize - 3; j--){

        if( (i+j) % 2 == 0 ){
            GameManager.gamestate[i][j] = GameManager.BLACK; 
            black_pieces.push(new GAME_PIECE(i, j, GameManager.BLACK));
        }

    }
}


//Draw red pieces
red_pieces.forEach(function(element, index, array){
    element.draw(GameManager.squareWidth, ctx);
});

black_pieces.forEach(function(element, index, array){
    element.draw(GameManager.squareWidth, ctx);
});