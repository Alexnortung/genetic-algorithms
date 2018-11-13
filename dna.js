class DNA {
  constructor() {
    this.genes = []

  }


  createRandomDNA(length){
    //12 neurons
    //6*6 + 6*3 + 3*3 + 3*1 = 66 synapses
    for (var i = 0; i < 78; i++) {
      this.genes[i] = DNA.createRandomGene();


    }

  }

  crossover(dna){
    const crossOverDNA = new DNA();
    for (var i = 0; i < this.genes.length; i++) {
      if (random(1) < mutationRate) {
        crossOverDNA.genes.push(DNA.createRandomGene());
      } else if (random(1) < 0.5) {
        crossOverDNA.genes.push(this.genes[i])

      } else {
        crossOverDNA.genes.push(dna.genes[i]);
      }
    }

    return crossOverDNA;

  }


  static createRandomGene(){
    return random(-255,255);
  }
}
