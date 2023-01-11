function chunkArrayInGroups(arr, size) {
    let resultArr = [];
    for (let i = 0; i < arr.length;) {
        let secondArr = []
        for (let j = 0; j < size; j++) {
            secondArr.push(arr[i++]);
            if (i >= arr.length) {
                break;
            }
        }
        resultArr.push(secondArr);
    }
    return resultArr;
  }
  
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)  );
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));