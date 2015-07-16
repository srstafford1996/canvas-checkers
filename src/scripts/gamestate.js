

var GameState = function(boardSize, squareWidth){

    this.currentState = { turn: SQUARE_STATE.P1 , mode: 'IDLE', selected: { x: 0, y: 0} };

    this.boardSize = boardSize;
    this.squareWidth = squareWidth;

    this.NEW_ARRAY();   //INITIALIZE GAMESTATE ARRAY
};

GameState.prototype.NEW_ARRAY = function(){

    this.StateArray = [];

    for(var i = 0; i < this.boardSize; i++){
        this.StateArray[i] = [];

        for(j = 0; j < this.boardSize; j++){

            var new_square_state = SQUARE_STATE.EMPTY;     //EMPTY SQUARE
            var new_square_color = 'rgb(0, 0, 0)';  //BLACK SQUARE


            if( (i+j) % 2 == 0 ){                   //ALL PLAYABLE SQUARES
                new_square_color = 'rgb(255, 255, 255)';    //They're all white. This code is pretty racist.

                if(j < 3)                           //ALL RED PIECES
                    new_square_state = SQUARE_STATE.P2;
                else if(j >= this.boardSize - 3)     //ALL BLACK PIECES
                    new_square_state = SQUARE_STATE.P1;
            }
            
            //PUSH NEW SQUARE
            this.StateArray[i][j] = new GAME_SQUARE(i, j, new_square_color, this.squareWidth, new_square_state);
        }
    }

    console.log(this.StateArray);

}

GameState.prototype.move = function(x1, y1, x2, y2){

    if( (this.StateArray[x1][y1].state != SQUARE_STATE.EMPTY) && (this.StateArray[x2][y2].state == SQUARE_STATE.EMPTY) ){   //FILLED SPOT TO EMPTY SPOT
        var valid_direction = 0;

        if( this.StateArray[x1][y1].state == SQUARE_STATE.P1 )
            valid_direction = -1;
        else
            valid_direction = 1;


        if( (x2 == x1 + 1 || x2 == x1 - 1) && y2 == y1 + valid_direction ){
            this.StateArray[x2][y2].state = this.StateArray[x1][y1].state;
            this.StateArray[x1][y1].state = SQUARE_STATE.EMPTY;
            return true;
        }
        
    }
    
    return false;

}

GameState.prototype.gameClick= function( x, y ){

    if( this.currentState.mode == 'IDLE' ){

        if( this.StateArray[x][y].state == this.currentState.turn ){
            this.currentState.mode = 'SELECTING';
            this.currentState.selected = {x: x, y: y};
            console.log('SELECTING');
        }

    }

    if( this.currentState.mode == 'SELECTING' ){

        if (this.move(this.currentState.selected.x, this.currentState.selected.y, x, y) ){
            if( this.currentState.turn == SQUARE_STATE.P1 )
                this.currentState.turn = SQUARE_STATE.P2;
            else
                this.currentState.turn = SQUARE_STATE.P1;
            this.currentState.mode = 'IDLE';
        }
            
    }

};

