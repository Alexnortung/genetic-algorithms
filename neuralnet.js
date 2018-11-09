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
        const neuron = new Neuron(dna[neuronInt]);
        neuronInt++;
      }

      arrNeuronPerLayer[i]
    }


    //create synapses from inputs to first neuron layer
    for (var i = 0; i < inputNeurons; i++) {
      const synapsesPerNeuron = this.neuronLayers[0].length;
      this.synapseLayers[0] = [];
      for (var j = 0; j <this.neuronLayers[0].length ; j++) {
        const synapseIndex = (synapsesPerNeuron * i) + j;
        const synapse = new Synapse(dna.genes[
          arrNeuronPerLayer.reduce((a,c) => a+c) + synapseIndex
        ], inputNeurons[i], this.neuronLayers[0][j]);
        synapseInt++;

        this.synapseLayers[0].push(synapse);

      }
    }

    //create synapses for all "hidden" layers
    for (let i = 1; i < this.neuronLayers.length - 1; i++) {

      this.synapseLayers[i] = [];

      const synapsesPerNeuron = this.neuronLayers[i+1].length ;
      for (let j = 0; j < this.neuronLayers[i]; j++) {
        for (let k = 0; k < synapsesPerNeuron; k++) {
          const syn = new Synapse(dna.genes[synapseInt], this.neuronLayers[i][j], this.neuronLayers[i+1][k]);
          this.synapseLayers[i].push(syn);
          synapseInt++;

        }
      }
    }

    //create synapses from last hidden layer to output
    this.synapseLayers.push([]);
    const lastHiddenLayer = this.neuronLayers[this.neuronLayers-1];
    for (var i = 0; i < lastHiddenLayer.length; i++) {
      for (var j = 0; j < outputs; j++) {
        const syn = new Synapse(dna.genes[synapseInt], lastHiddenLayer[i], outputNeurons[j]);
        synapseInt++;

      }
    }



  }

  calculateInputs(inputs){

  }
}
