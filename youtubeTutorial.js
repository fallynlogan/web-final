var WIDTH = 7;
var grid = [];
var score;

function setup() {
  createCanvas(540, 720);
  initGrid();
  frameRate(5);
  
  score = 0;
}

function keyPressed(){
  if(keyCode === 32){
    var y = grid.length - 1;
    var count = grid[y].stop(grid[y-1]);
    
    // if(count < 1){
    //  endGame();
    // }
    
    grid.push(new Row(++y,count));
  }
}

function Row(y,count){
  this.y = y;
  this.xV = 1;
  this.tiles = [];
  this.count = count;
  this.dynamic = true;
  
  this.initRow(count);
}

Row.prototype.update = function (){
  if(this.xV > 0) {
    //moving to the right 
    for(x = WIDTH - 1; x >= 0; x--){
      if(this.tiles[x]) { //its lit figure out wtf lit means lol 
        if(x < WIDTH - 1){
          
          if(this.tiles[x+1]){
            this.reverse();
          }
          else{
            this.tiles[x] = false;
            this.tiles[x+1] = true;
          }
        }
        else{
          this.reverse();
        }
      }
    } 
  }
  else{
    //moving to the left
  for(x = 0; x < WIDTH; x++){
      if(this.tiles[x]) { //its lit figure out wtf lit means lol 
        if(x > 0){
          
          
          if(this.tiles[x-1]){
            this.reverse();
          }
          else{
            this.tiles[x] = false;
            this.tiles[x-1] = true;
          }
        }
        else{
          this.reverse();
        }
      }
    }
  }
};

Row.prototype.draw = function (size){
  for(var x = 0; x < WIDTH; x++){
    
    if(this.tiles[x]){
      rect(x*size, height-((this.y+1)*size), size, size);
    }
  }
};

Row.prototype.stop = function(row){
  //if row exists 
  if(row){
    var tC = 0;
    for(var x = 0; x < WIDTH; x++){
      //its on top & there is a tile below it
      if(this.tiles[x] && row.tiles[x]){
        this.tiles[x] = true;
        tC++;
      }else{
        this.tiles[x] = false;
      }
  }
    this.dynamic = false;
    return tC;
}
  else{
    this.dynamic = false;
    return this.count;
  }
}

Row.prototype.reverse = function(){
  this.xV *= -1;
  this.update();
  this.update();
}

Row.prototype.initRow = function(count){
  for(var x = 0; x < WIDTH; x++){
    this.tiles.push(x<count);
  }
}

function draw() {
  background(51);
  
  handleGrid();  
  
}


function handleGrid(){
  var size = width / WIDTH;
  
  fill("#FF0000");
  stroke(255);
  strokeWeight(3);
  for(var y = 0; y < grid.length; y++)
  {
      if(grid[y].dynamic){
         grid [y].update();
      }
    grid[y].draw(size);
  }
}

// function endGame(){
  
// }

function initGrid(){
  grid=[];
  grid.push(new Row(0,3)); 
}
