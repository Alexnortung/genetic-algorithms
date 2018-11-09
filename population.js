class Population {
  constructor(size) {
    this.size = size;
    this.organisms = [];
  }

  createRandomPopulation(){
    for (var i = 0; i < populationSize ; i++) {
      const dna = new DNA();
      dna.createRandomDNA(dnaLength);
      const organism = new Organism(dna, start.copy());
      organism.i = i;
      this.organisms.push(organism);

    }
  }
}
