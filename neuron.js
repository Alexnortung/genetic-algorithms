class Neuron {
  constructor(multiplier) {
    this.multiplier = multiplier;
    this.currentValue = 0;
  }

  addValue(v){
    this.currentValue += v;
  }

  getOutput(){
    return this.multiplier * this.currentValue;
  }
}
