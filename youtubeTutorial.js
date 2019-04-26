var WIDTH = 7;
var grid = [];

function setup() {
  createCanvas(540, 720);
  initGrid();
  frameRate(5);
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
            this.xV *= -1;
          }
          else{
            this.tiles[x] = false;
            this.tiles[x+1] = true;
          }
        }
        else{
          this.xV *= -1;
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
            this.xV *= -1;
          }
          else{
            this.tiles[x] = false;
            this.tiles[x-1] = true;
          }
        }
        else{
          this.xV *= -1;
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



function initGrid(){
  grid=[];
  grid.push(new Row(0,3)); 
}
