class NeuralNet {
  constructor(inputs, arrNeuronPerLayer, outputs, dna) {
    this.inputs = inputs;
    // an array with ints, where each int represents the number of neurons in that layer
    this.arrNeuronPerLayer = arrNeuronPerLayer;
    this.outputs = outputs;
    this.dna = dna;

    this.inputNeurons = [];
    this.outputNeurons = [];

    this.neuronLayers = [];
    this.synapseLayers = [];

    for (var i = 0; i < inputs; i++) {
      this.inputNeurons[i] = new InputNeuron();
    }
    for (var i = 0; i < outputs; i++) {
      this.outputNeurons[i] = new OutputNeuron();
    }


    let neuronInt = 0;
    let synapseInt = arrNeuronPerLayer.reduce((a,c) => a+c);

    //create neurons
    for (let i = 0; i < arrNeuronPerLayer.length; i++) {
      this.neuronLayers[i] = [];
      for (let j = 0; j < arrNeuronPerLayer[i]; j++) {
        const neuron = new Neuron(dna.genes[neuronInt]);
        this.neuronLayers[i].push(neuron);
        neuronInt++;
      }

      arrNeuronPerLayer[i]
    }


    //create synapses from inputs to first neuron layer
    this.synapseLayers[0] = [];
    for (var i = 0; i < this.inputNeurons.length; i++) {
      const synapsesPerNeuron = this.neuronLayers[0].length;
      for (var j = 0; j <this.neuronLayers[0].length ; j++) {
        const synapseIndex = (synapsesPerNeuron * i) + j;
        const synapse = new Synapse(dna.genes[
          arrNeuronPerLayer.reduce((a,c) => a+c) + synapseIndex
        ], this.inputNeurons[i], this.neuronLayers[0][j]);
        synapseInt++;

        this.synapseLayers[0].push(synapse);


      }
    }

    //create synapses for all "hidden" layers
    for (let c = 0; c < this.neuronLayers.length - 1; c++) {
      let i = c+1;
      this.synapseLayers[i] = [];

      const synapsesPerNeuron = this.neuronLayers[i].length ;
      //for every neuron in this layer
      for (let j = 0; j < this.neuronLayers[c].length; j++) {
        for (let k = 0; k < synapsesPerNeuron; k++) {
          const syn = new Synapse(dna.genes[synapseInt], this.neuronLayers[c][j], this.neuronLayers[i][k]);
          this.synapseLayers[i].push(syn);
          synapseInt++;

        }
      }
    }

    //create synapses from last hidden layer to output
    this.synapseLayers.push([]);
    const lastSynapseLayer = this.synapseLayers[this.synapseLayers.length-1];
    const lastHiddenLayer = this.neuronLayers[this.neuronLayers.length-1];
    // console.log(lastHiddenLayer);
    for (var i = 0; i < lastHiddenLayer.length; i++) {
      for (var j = 0; j < outputs; j++) {
        const syn = new Synapse(dna.genes[synapseInt], lastHiddenLayer[i], this.outputNeurons[j]);
        lastSynapseLayer.push(syn);
        synapseInt++;

      }
    }



  }

  clearNeuronValues(){
    for (var i = 0; i < this.inputNeurons.length; i++) {
      this.inputNeurons[i].resetValue();
    }

    for (var i = 0; i < this.outputNeurons.length; i++) {
      this.outputNeurons[i].resetValue();
    }

    for (var i = 0; i < this.neuronLayers.length; i++) {
      for (var j = 0; j < this.neuronLayers[i].length; j++) {
        const cNeuron = this.neuronLayers[i][j];
        cNeuron.resetValue();
      }

    }
  }

  calculateInputs(inputs){
    this.clearNeuronValues();
    for (var i = 0; i < this.inputNeurons.length; i++) {
      if (i >= inputs.length) {
        break;
      }
      this.inputNeurons[i].addValue(inputs[i]);
    }

    for (var i = 0; i < this.synapseLayers.length; i++) {
      for (var j = 0; j < this.synapseLayers[i].length; j++) {
        this.synapseLayers[i][j].calculateAndSend();
      }
    }
    // console.log(this.outputNeurons[0].getOutput());
  }

  getOutput(){
    return this.outputNeurons;
  }

}
