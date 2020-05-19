function frankenSplice(arr1, arr2, n) {
  let frankenArray = [];

  for (let i = 0; i < n; i++) 
    frankenArray.push(arr2[i]);

  for (let i = 0; i < arr1.length; i++)
    frankenArray.push(arr1[i]);

  for (let i = n; i < arr2.length; i++)
    frankenArray.push(arr2[i]);

  return frankenArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);