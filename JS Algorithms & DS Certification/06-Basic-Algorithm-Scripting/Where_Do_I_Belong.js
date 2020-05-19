function getIndexToIns(arr, num) {
  arr.push(num);
  arr = arr.sort((a, b) => {return a - b})
  
  let i = 0;
  while (arr[i] !== num)
    i++;
  
  return i;
}

getIndexToIns([], 1)
getIndexToIns([2, 5, 10], 15)
getIndexToIns([10, 20, 30, 40, 50], 35)
getIndexToIns([3, 10, 5], 3)