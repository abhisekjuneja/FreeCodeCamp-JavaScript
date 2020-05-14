function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const array = rangeOfNumbers(startNum, endNum - 1);
    array.push(endNum);
    return array;
  }
};