class Organism {
  constructor(dna, pos) {
    this.dna = dna;
    this.position = pos;
    this.velocity = new Vector(1,0);


  }

  turn(value){
    //value between -1 and 1
    //1 = 5 degree
    let dir = this.velocity.getDirection += (value*0.1);
    this.velocity.setDirection(dir);


  }

  update() {
    // calculate distances to walls
    // front; velocity
    const frontVector = this.velocity.copy();
    frontVector.setMagnitude(2000);
    const frontEndPoint = frontVector.add(this.position);
    const frontIntersections = [];
    for (var i = 0; i < walls.length; i++) {
      const lines = walls[i].lineSegments;
      for (var j = 0; j < lines.length; j++) {
        const cLine = lines[j]
        const interLines = lines_intersect(this.position.x, this.position.y, frontEndPoint.x, frontEndPoint.y,
          cLine.x1, cLine.y1, cLine.x2, cLine.y2
        );
        if (interLines.intersect == 1) {
          //intersects
          interLines.wall = walls[i]
          frontIntersections.push(interLines)
        }
      }
    }

    if (this.i == 0) {
      console.log(frontIntersections);

    }



    // right; velocity + 90 degree

    //left; velocity - 90 degree

    // front left; velocity - 45 degree

    //front right; velocity + 45 degree

    //calculate turn

  }

  draw(){
    ellipse(this.position.x, this.position.y, 2);
  }
}
