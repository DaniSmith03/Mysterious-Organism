// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
console.log('node is running');

const pAequorFactory = (idNum, dna) => {
  const getDNA = dna;
  return {
    specimenNum: idNum,
    dna: getDNA,
    mutate() {
      let ranBase = returnRandBase();
      console.log(ranBase);
      let getIndex = [Math.floor(Math.random() * this.dna.length)];
      console.log(getIndex);
      console.log(`index ${getIndex} is ${this.dna[getIndex]} before mutation`);
      this.dna[getIndex] == ranBase
        ? (this.dna[getIndex] = returnRandBase())
        : (this.dna[getIndex] = ranBase);
      console.log(`index ${getIndex} is ${this.dna[getIndex]} after mutation`);
      return this;
    },
    compareDNA(obj) {
      let matched = 0;
      let { dna } = obj;
      for (let i = 0; i < dna.length; i++) {
        this.dna[i] == dna[i] ? (matched += 1) : 'not a match';
      }
      console.log(matched);
      matched = (matched * 100) / this.dna.length;
      console.log(
        `${matched} % of specimen ${this.specimenNum} and specimen ${obj.specimenNum} is a match `
      );
      return null;
    },
  };
};

const animal = pAequorFactory(4, mockUpStrand());
const human = pAequorFactory(5, mockUpStrand());
console.log(animal);
console.log(human);
console.log(animal.compareDNA(human));
