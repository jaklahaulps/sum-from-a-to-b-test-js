
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let value = fromN;
  if (toN === value){
    return value;
  }

  return value + sum(value+1, toN)

}

module.exports = sum;