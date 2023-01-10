function findLongestWordLength(str) {
    let result = 0;
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > result) {
            result = arr[i].length;
        }
        
    }
    return result;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));