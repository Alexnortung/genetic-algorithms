class Neuron {
  constructor(multiplier) {
    this.multiplier = multiplier;
    this.currentValue = 0;
  }

  addValue(v){
    this.currentValue += v;
  }

  resetValue(){
    this.currentValue = 0;
  }

  getOutput(){
    return this.multiplier * this.currentValue;
  }
}
