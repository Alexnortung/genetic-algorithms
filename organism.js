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
    

    //calculate turn

  }

  draw(){
    ellipse(this.position.x, this.position.y, 2);
  }
}
