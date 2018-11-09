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

  get lineSegments() {
    const returnArr = [];
    //get top
    const top= new LineSegment(this.x, this.y, this.x+ this.width, this.y);


    //get right
    const r = new LineSegment(this.x + this.width, this.y, this.x+ this.width, this.y + this.height);

    //get bottom
    const b = new LineSegment(this.x, this.y + this.height, this.x+ this.width, this.y + this.height);

    //get left
    const l = new LineSegment(this.x, this.y, this.x, this.y+ this.height);
    returnArr.push(top, r , b, l);
    return returnArr;
  }

  draw() {
    push();
    fill(0);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }
}
