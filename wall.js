class Wall {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }

  get position(){
    return new Vector(this.x,this.y);
  }

  get positionEnd(){
    return new Vector(this.x + this.width, this.y + this.height);
  }

  draw() {
    push();
    fill(0);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }
}
