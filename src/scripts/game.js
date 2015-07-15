
var _boardSize = 8;
var _squareWidth = 75;

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');


//Draw board
for(var i = 0; i < _boardSize; i++){

    for(var j = 0; j < _boardSize; j++){

        //Alternate square color
        if( (i+j)%2 == 1 )                  
            ctx.fillStyle = "rgb(0, 0, 0)";
        else                                
            ctx.fillStyle = "rgb(255, 255, 255)"; 

        //Draw square
        ctx.fillRect( j * _squareWidth, i * _squareWidth, _squareWidth, _squareWidth);
        
    }
}

//Create red pieces
var red_pieces = [];
for(var i = 0; i < _boardSize; i++){

    for(var j = 0; j < 3; j++){

        if( (i+j)% 2 == 0 )
            red_pieces.push(new GAME_PIECE(i, j, 'RED'));

    }
}

//Create black pieces
var black_pieces = [];
for(var i = 0; i < _boardSize; i++){

    for(var j = _boardSize - 1; j >= _boardSize - 3; j--){
        if( (i+j) % 2 == 0 )
            black_pieces.push(new GAME_PIECE(i, j, 'BLACK'));
    }
}


//Draw red pieces
ctx.fillStyle = 'rgb(200, 0, 0)';
red_pieces.forEach( function(element, index, array){
    element.draw(_squareWidth, ctx);
});

//Draw black pieces
ctx.fillStyle = 'rgb(100, 100, 100)';
black_pieces.forEach( function(element, index, array){
    element.draw(_squareWidth, ctx);
})