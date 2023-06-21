function sumAll(minNum, maxNum) {
    let sum = 0;
    if (minNum < 0 || maxNum < 0 || !Number.isInteger(minNum) || !Number.isInteger(maxNum)) {
        return "ERROR";
    }
    if (minNum > maxNum) {
      for (i = maxNum; i <= minNum; i++) {
        sum += i;
        continue;
      }
    }
    for (i = minNum; i <= maxNum; i++) {
      sum += i;
    }
    return sum;
  }
  


// Do not edit below this line
module.exports = sumAll;
