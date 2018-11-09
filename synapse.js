class Synapse {
  constructor(multiplier,inputNeuron, outputNeuron) {
    this.multiplier = multiplier;
    this.inputNeuron = inputNeuron;
    this.outputNeuron = outputNeuron;
  }

  calculateAndSend(){
    const inputVal = this.inputNeuron.getOutput();
    this.outputNeuron.addValue(inputVal * this.multiplier);
  }

}
