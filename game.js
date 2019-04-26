    //width of the board
    var boardWidth = 280;
    //height of the board
    var boardHeight = 480;
    //position of drawing on canvas -- in this case the margins around the grid
    var p = 10;
    //
    var myGamePiece;


    var canvas = document.getElementById("canvas");
    //www.w3schools.com/tags/ref_canvas.asp -- reference
    var context = canvas.getContext("2d");
    //draws the game board on the canvas 
    function drawBoard()
    {
        //horizontal lines on board 
        //40 is the size of each block on board 
        for (var x = 0; x <= boardWidth; x += 40) {
            //x & y corrdinates on drawing -- each block in loop + margin until the margin on the other side of canvas
            context.moveTo(x + p, p);
            //what draws the lines
            context.lineTo(x + p, boardHeight + p);
        }
        //vertical lines on board
        for (var x = 0; x <= boardHeight; x += 40) {
            context.moveTo(p, x + p);
            context.lineTo(boardWidth + p,x + p);
        }
        //sets the color 
        context.strokeStyle = "#7247FF";
        //actually draws the above defines lines 
        context.stroke();
    }
    var x = 90;
    var y = 450;
    var width = 120;
    var height = 40;

    //working before adding this.  
    function drawBlocks(width, height, x, y)
    {
        width = width;
        height = height;
        speedX = 0;
        x = x;
        y = y;
        // update = function()
        // {

        context.fillStyle = "#8AC9FF";
        context.fillRect(x, y, width, height);
        //}

        // this.newPosition = function ()
        // {
        //     this.x += this.speedX;
        // }
    }

    //each time you press the space bar the speed at which the game peice moves is increased 
    // function increaseSpeed()
    // {
    //     if(keydown == 32)
    //     {
    //     myGamePiece.speed ++;
    //     }
    // }

    function runGame()
    {
        drawBlocks(width, height, x, y);
        drawBoard();
    }
    
    
    
    