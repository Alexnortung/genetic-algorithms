class OutputNeuron extends Neuron {
  constructor() {
    super(1);
  }

  getOutput(){
    const prevVal = Neuron.prototype.getOutput.call(this);
    return sigmoid(prevVal);
  }
}
