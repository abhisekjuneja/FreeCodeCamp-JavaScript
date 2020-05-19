function bouncer(arr) {
  let answerArray = [];
  
  for (let i = 0; i < arr.length; i++)
    if (Boolean(arr[i]))
      answerArray.push(arr[i]);

  return answerArray;
}

bouncer([7, "ate", "", false, 9]);