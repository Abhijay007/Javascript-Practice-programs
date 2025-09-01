function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      // Move elements greater than key one position ahead
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
  
  // Example usage
  console.log(insertionSort([5, 3, 8, 4, 2, 7, 1, 6]));
  