var database = [
  {
    ner: "zaluu",
    nas:  39,
    score: 250
  },
  {
    ner: "anand",
    nas: 32,
    score: 400
  },
  {
    ner: "barhas",
    nas: 37,
    score: 400
  },
  {
    ner: "enkhjin",
    nas: 36,
    score: 300
  } 
];


function decisionHelper(minScore) {
  return database.reduce((accumulator, currentValue) => {
    if(/*******/) {
      return /*******/
    } 
    return accumulator;
  }, 0)
}

console.log(decisionHelper(process.argv[2]))
