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
    // right; velocity + 90 degree
    const rightVector = this.velocity.copy();
    rightVector.setDirection(rightVector.getDirection() - radians(90));
    rightVector.setMagnitude(2000);
    const rightEndPoint = rightVector.add(this.position);
    const rightIntersections = [];

    //left; velocity - 90 degree
    const leftVector = this.velocity.copy();
    leftVector.setDirection(leftVector.getDirection() + radians(90));
    leftVector.setMagnitude(2000);
    const leftEndPoint = leftVector.add(this.position);
    const leftIntersections = [];

    // front left; velocity - 45 degree
    const frontLeftVector = this.velocity.copy();
    frontLeftVector.setDirection(frontLeftVector.getDirection() + radians(45));
    frontLeftVector.setMagnitude(2000);
    const frontLeftEndPoint = frontLeftVector.add(this.position);
    const frontLeftIntersections = [];

    //front right; velocity + 45 degree
    const frontRightVector = this.velocity.copy();
    frontRightVector.setDirection(frontRightVector.getDirection() - radians(45));
    frontRightVector.setMagnitude(2000);
    const frontRightEndPoint = frontRightVector.add(this.position);
    const frontRightIntersections = [];


    // console.log(frontVector, rightVector, leftVector);


    for (var i = 0; i < walls.length; i++) {
      const lines = walls[i].lineSegments;
      for (var j = 0; j < lines.length; j++) {
        const cLine = lines[j]
        const interLinesLeft = lines_intersect(this.position.x, this.position.y, leftEndPoint.x, leftEndPoint.y,
          cLine.x1, cLine.y1, cLine.x2, cLine.y2
        );
        const interLinesRight = lines_intersect(this.position.x, this.position.y, rightEndPoint.x, rightEndPoint.y,
          cLine.x1, cLine.y1, cLine.x2, cLine.y2
        );
        const interLinesFront = lines_intersect(this.position.x, this.position.y, frontEndPoint.x, frontEndPoint.y,
          cLine.x1, cLine.y1, cLine.x2, cLine.y2
        );
        const interLinesFrontLeft = lines_intersect(this.position.x, this.position.y, frontLeftEndPoint.x, frontLeftEndPoint.y,
          cLine.x1, cLine.y1, cLine.x2, cLine.y2
        );
        const interLinesFrontRight = lines_intersect(this.position.x, this.position.y, frontRightEndPoint.x, frontRightEndPoint.y,
          cLine.x1, cLine.y1, cLine.x2, cLine.y2
        );
        if (interLinesFront.intersect == 1 && interLinesFront.partOfBoth) {
          //intersects
          interLinesFront.wall = walls[i]
          frontIntersections.push(interLinesFront);
        }
        if (interLinesLeft.intersect == 1 && interLinesLeft.partOfBoth) {
          leftIntersections.push(interLinesLeft);
        }

        if (interLinesRight.intersect == 1 && interLinesRight.partOfBoth) {
          rightIntersections.push(interLinesRight);

        }

        if (interLinesFrontRight.intersect == 1 && interLinesFrontRight.partOfBoth) {
          frontRightIntersections.push(interLinesRight);

        }
        if (interLinesFrontLeft.intersect == 1 && interLinesFrontLeft.partOfBoth) {
          frontLeftIntersections.push(interLinesRight);

        }
      }
    }
    //find shortest distances
    let shortestDistanceLeft = 2000;
    let shortestDistanceFront = 2000;
    let shortestDistanceRight = 2000;
    let shortestDistanceFrontRight = 2000;
    let shortestDistanceFrontLeft = 2000;
    for (var i = 0; i < leftIntersections.length; i++) {
      const v = new Vector(-this.position.x + leftIntersections[i].x, -this.position.y + leftIntersections[i].y);
      // console.log(v);
      const d = v.getMagnitude();
      if (d < shortestDistanceLeft) {
        shortestDistanceLeft = d;
      }
    }
    for (var i = 0; i < frontIntersections.length; i++) {
      const v = new Vector(-this.position.x + frontIntersections[i].x, -this.position.y + frontIntersections[i].y);
      const d = v.getMagnitude();
      if (d < shortestDistanceFront) {
        shortestDistanceFront = d;
      }
    }
    for (var i = 0; i < rightIntersections.length; i++) {
      const v = new Vector(-this.position.x + rightIntersections[i].x, -this.position.y + rightIntersections[i].y);
      const d = v.getMagnitude();
      if (d < shortestDistanceRight) {
        shortestDistanceRight = d;
      }
    }
    for (var i = 0; i < frontRightIntersections.length; i++) {
      const v = new Vector(-this.position.x + frontRightIntersections[i].x, -this.position.y + frontRightIntersections[i].y);
      const d = v.getMagnitude();
      if (d < shortestDistanceFrontRight) {
        shortestDistanceFrontRight = d;
      }
    }
    for (var i = 0; i < frontLeftIntersections.length; i++) {
      const v = new Vector(-this.position.x + frontLeftIntersections[i].x, -this.position.y + frontLeftIntersections[i].y);
      const d = v.getMagnitude();
      if (d < shortestDistanceFrontLeft) {
        shortestDistanceFrontLeft = d;
      }
    }

    let distanceToGoal = this.position.subtract(goal).getMagnitude();

    // console.log(shortestDistanceLeft, shortestDistanceFront, shortestDistanceRight);

    if (this.i == 0) {
      // console.log(frontIntersections);

    }




    //calculate turn

  }


  neuralNet(dF,dR,dL,dFR,dRL,dG){
    // synapse layer 1 from input 1 = dna[neurons.length + {0 - 5 (6)}]
    const neurons = 12
    //layer 1 synapses
    for (var i = neurons; i < neurons + (6*6); i++) {
      
    }
  }


  draw(){
    ellipse(this.position.x, this.position.y, 2);
  }
}
