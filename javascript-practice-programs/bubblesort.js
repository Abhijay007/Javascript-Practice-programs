function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // swap
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  // Example usage:
  let arr = [64, 34, 25, 12, 22, 11, 90];
  console.log("Unsorted:", arr);
  console.log("Sorted:", bubbleSort(arr));
  
