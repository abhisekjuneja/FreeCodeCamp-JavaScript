function findLongestWordLength(str) {
  let strTokens = str.split(' ');

  let maxWordLength = 0;
  for (let i = 0; i < strTokens.length; i++) {
    if (strTokens[i].length > maxWordLength)
      maxWordLength = strTokens[i].length;
  }
  
  return maxWordLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
