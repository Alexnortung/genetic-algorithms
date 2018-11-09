class DNA {
  constructor() {
    this.genes = []

  }

  createRandomDNA(length){
    //12 neurons
    //6*6 + 6*3 + 3*3 + 3*1 = 66 synapses
    for (var i = 0; i < 78; i++) {
      this.genes[i] = random(-255,255);


    }

  }

  crossover(dna){

  }
}
