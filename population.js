class Population {
  constructor(size) {
    this.size = size;
    this.organisms = [];
  }

  isDead(){
    for (var i = 0; i < this.organisms.length; i++) {
      if (!this.organisms[i].isDead) {
        return false;
      }
    }
    return true;
  }

  get winners() {
    let winners2 = 0;
    this.organisms.forEach((organism) => {
      if (organism.won) {
        winners2++;
      }
    });

    return winners2;

  }

  get bestOrganism() {
    let maxScoringOrganism = this.organisms[0]
    for (var i = 0; i < this.organisms.length; i++) {
      this.organisms[i].score > maxScoringOrganism.score ? maxScoringOrganism = this.organisms[i] : 0;
    }
    return maxScoringOrganism;
  }

  createNextGeneration() {
    const matingPool = [];

    for (var i = 0; i < this.organisms.length; i++) {
      const n = Math.round(this.organisms[i].score)
      for (var j = 0; j < n; j++) {
        matingPool.push(this.organisms[i].dna);
      }
    }

    // console.log(matingPool);

    const nextGen = new Population(this.size);
    for (var i = 0; i < this.size; i++) {
      const parent1 = matingPool[floor(random(matingPool.length))];
      const parent2 = matingPool[floor(random(matingPool.length))];
      // console.log(parent1, parent2);

      const crossOverDNA = parent1.crossover(parent2);

      const organism = new Organism(crossOverDNA);

      nextGen.addOrganism(organism);

    }

    //select two pieces of dna from the pool
    return nextGen;


  }

  addOrganism(o) {
    this.organisms.push(o);
  }

  createRandomPopulation(){
    for (var i = 0; i < populationSize ; i++) {
      const dna = new DNA();
      dna.createRandomDNA(dnaLength);
      const organism = new Organism(dna);
      organism.i = i;
      this.organisms.push(organism);

    }
  }
}
