
var _boardSize = 8;
var _squareWidth = 75;


var GameManager = function(){

    //Constants
    this.boardSize = 8;
    this.squareWidth = 75;

    this.gamestate = new GameState(_boardSize, _squareWidth);


    /**** SETUP CANVAS ****/
    this.canvas = document.getElementById('game');
    this.ctx = this.canvas.getContext('2d');

    var parentscope = this; //Javascript...
    this.canvas.addEventListener('click', function(event){
        var x =  Math.floor( (event.pageX - parentscope.canvas.offsetLeft) / _squareWidth )
        var y = Math.floor( (event.pageY - parentscope.canvas.offsetTop) / _squareWidth )

        parentscope.gamestate.gameClick(x, y);
        parentscope.drawBoard();
    });
};

//Draw checkerboard
GameManager.prototype.drawBoard = function(){

    var parentscope = this; //JAVASCRIPT INTENSIFIES

    this.gamestate.StateArray.forEach(function(element){
        element.forEach(function(element2){
            element2.draw(parentscope.ctx);
        });
    })
}


var GM = new GameManager();
GM.drawBoard();
