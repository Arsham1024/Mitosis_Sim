function Cell (pos, radius, c){
   
   if(pos) {
      this.pos = pos.copy();
   }else{
      this.pos = createVector(random(width), random(height));
   }

   this.radius = radius || 60;
   this.color = c || color(random(100,255), 0 , random(100,255), 100);

   //Take that random change and add it to position
   this.move = function(){
      this.pos.add(p5.Vector.random2D());
   } 

   this.show = function (){
      noStroke();
      fill(this.color);
      ellipse (this.pos.x , this.pos.y, this.radius, this.radius);
   }

   this.clicked = function (x,y){
      var d  = dist (this.pos.x, this.pos.y, x , y);
      if(d < this.radius){
         return true;
      }else {
         return false;
      }
   }

   //Main mitosis function that randomizes the next position and divides the radius
   this.mitosis = function (cell){
      // pos += random(-this.radius,this.radius);
      return new Cell(cell.pos, this.radius*0.9, this.color);
   }
}