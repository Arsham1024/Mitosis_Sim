function Cell (pos, radius, pos){
   if(pos) {
      this.pos = pos;
   }else{
      this.pos = createVector(random(width), random(height));
   }

   this.radius = radius || 50;
   this.color = color (random(100,255), 0 , random(100,255)) || color;

   //Take that random change and add it to position
   this.move = function(){
      var change = p5.Vector.random2D();
      this.pos.add(change);
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

   this.mitosis = function (){
      this.pos.x += random(-this.radius,this.radius);
      var cell = new Cell(this.pos, this.radius, this.color);
      return cell;
   }
}