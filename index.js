var database = [
  {
    ner: "bat-oyun",
    nas:  39,
    score: 400
  },
  {
    ner: "anand",
    nas: 32,
    score: 140
  },
  {
    ner: "barhas",
    nas: 37,
    score: 200
  },
  {
    ner: "enkhjin",
    nas: 36,
    score: 400
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
