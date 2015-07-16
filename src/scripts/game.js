
STATE = {
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

            var new_square_state = STATE.EMPTY;     //EMPTY SQUARE
            var new_square_color = 'rgb(0, 0, 0)';  //BLACK SQUARE


            if( (i+j) % 2 == 0 ){                   //ALL PLAYABLE SQUARES
                new_square_color = 'rgb(255, 255, 255)';    //They're all white. This code is pretty racist.

                if(j < 3)                           //ALL RED PIECES
                    new_square_state = STATE.RED;
                else if(j > this.boardSize - 3)     //ALL BLACK PIECES
                    new_square_state = STATE.BLACK;
            }
            //Empty slots
            this.gamestate[i][j] = new GAME_SQUARE(i, j, new_square_color, this.squareWidth, new_square_state);
        }
    }

    /**** SETUP CANVAS ****/
    this.canvas = document.getElementById('game');
    this.ctx = this.canvas.getContext('2d');

    var parentscope = this; //Javascript...
    this.canvas.addEventListener('click', function(event){
        var x =  Math.floor( (event.pageX - parentscope.canvas.offsetLeft) / parentscope.squareWidth )
        var y = Math.floor( (event.pageY - parentscope.canvas.offsetTop) / parentscope.squareWidth )

        parentscope.gamestate[x][y].clicked(parentscope.gamestate);
    });
};

//Draw checkerboard
GameManager.prototype.drawBoard = function(){

    var parentscope = this; //JAVASCRIPT INTENSIFIES

    this.gamestate.forEach(function(element){
        element.forEach(function(element2){
            element2.draw(parentscope.ctx);
        });
    });

}


var GM = new GameManager();
GM.drawBoard();
