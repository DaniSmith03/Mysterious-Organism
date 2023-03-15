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
    willLikelySurvive() {
      let cg = this.dna.filter((strand) => strand == 'C' || strand == 'G');
      return cg.length >= 9;
    },
  };
};

// const animal = pAequorFactory(4, mockUpStrand());
// const human = pAequorFactory(5, mockUpStrand());
// console.log(animal);
// console.log(human);
// console.log(animal.willLikelySurvive());
// console.log(human.willLikelySurvive());

// create 30 specimen that are likely to survive

const getArr = (num) => {
  let spec = [];
  let count = num - 1;
  for (let i = 0; i < num; i++) {
    let survival = false;
    let generate = pAequorFactory(count, mockUpStrand());
    while (survival == false) {
      if (generate.willLikelySurvive() == true) {
        survival = true;
        count -= 1;
        spec.push(generate);
      } else {
        generate.dna = mockUpStrand();
      }
    }
  }
  return spec;
};

lab = getArr(30);
console.log(lab.length);
