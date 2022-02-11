function chunkArrayInGroups(arr, size) {
  let splitArray = [];

  let arraySection = [];
  for (let i = 0; i < arr.length; i++) {
    arraySection.push(arr[i]);
    if ((i + 1) % size === 0) {
      splitArray.push(arraySection);
      arraySection = [];
    }
  }

  if (arraySection.length > 0)
    splitArray.push(arraySection);

  return splitArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)